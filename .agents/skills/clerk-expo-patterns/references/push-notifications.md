# Push Notifications with User Context

Store the Expo push token against the Clerk user using `publicMetadata` or your own database.

## Register Push Token After Sign-In

```tsx
import { useUser } from '@clerk/expo'
import * as Notifications from 'expo-notifications'
import { useEffect } from 'react'

export function PushTokenRegistrar() {
  const { user, isLoaded } = useUser()

  useEffect(() => {
    if (!isLoaded || !user) return

    async function register() {
      const { status } = await Notifications.requestPermissionsAsync()
      if (status !== 'granted') return

      const token = (await Notifications.getExpoPushTokenAsync()).data

      // Send to a backend endpoint — never write metadata directly from the client
      await fetch('/api/push-token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      })
    }

    register()
  }, [isLoaded, user])

  return null
}
```

> Validate the token format on the server before persisting. Use the Clerk Backend SDK to write `publicMetadata` so the client cannot spoof the stored value.

## Backend Token Handler (Server)

```typescript
// app/api/push-token+api.ts (Expo Router API route)
import { clerkClient } from '@clerk/nextjs/server'

export async function POST(request: Request) {
  // Extract userId from Clerk session via your auth middleware
  const userId = request.headers.get('x-clerk-user-id') ?? ''
  if (!userId) return new Response('Unauthorized', { status: 401 })

  const { token } = (await request.json()) as { token: string }

  if (!token || !/^ExponentPushToken\[.+\]$/.test(token)) {
    return new Response('Invalid push token', { status: 400 })
  }

  const client = await clerkClient()
  await client.users.updateUser(userId, {
    publicMetadata: { expoPushToken: token },
  })

  return new Response('OK', { status: 200 })
}
```

## Send Notification to User (Server)

```tsx
import { clerkClient } from '@clerk/nextjs/server'

async function sendNotification(userId: string, title: string, body: string) {
  const client = await clerkClient()
  const user = await client.users.getUser(userId)
  const token = user.publicMetadata?.expoPushToken as string | undefined

  if (!token) return

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ to: token, title, body }),
  })
}
```

## CRITICAL

- `user.update()` is client-side — it writes `unsafeMetadata` without server auth
- For verified/sensitive data, use the Clerk Backend SDK from your server to write `publicMetadata`
- Re-register the push token if `user.id` changes (org switch does not change user.id, but sign-out/sign-in as different user does)

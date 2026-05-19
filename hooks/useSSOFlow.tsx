import { useSSO } from '@clerk/expo'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import * as Linking from 'expo-linking'
import { router } from 'expo-router'

export type SSOStrategy = 'oauth_google' | 'oauth_facebook' | 'oauth_apple'

export const socialProviders: {
  strategy: SSOStrategy
  label: string
  icon: JSX.Element
}[] = [
  {
    strategy: 'oauth_google',
    label: 'Continue with Google',
    icon: <AntDesign name='google' size={22} color='#EA4335' />,
  },
  {
    strategy: 'oauth_facebook',
    label: 'Continue with Facebook',
    icon: <FontAwesome name='facebook' size={22} color='#1877F2' />,
  },
  {
    strategy: 'oauth_apple',
    label: 'Continue with Apple',
    icon: <AntDesign name='apple' size={22} color='#000000' />,
  },
]

export function useSSOFlow(setError: (msg: string | null) => void) {
  const { startSSOFlow } = useSSO()

  const handleSSO = async (strategy: SSOStrategy) => {
    setError(null)
    try {
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy,
        redirectUrl: Linking.createURL('/oauth-callback'),
      })
      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId })
        router.replace('/')
      }
    } catch (err) {
      const clerkErr = err as {
        errors?: { longMessage?: string; message?: string }[]
      }
      const msg =
        clerkErr.errors?.[0]?.longMessage ??
        clerkErr.errors?.[0]?.message ??
        (err instanceof Error ? err.message : String(err))
      setError(msg)
    }
  }

  return { handleSSO }
}

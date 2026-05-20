import { useLanguageStore } from '@/store/useLanguageStore'
import { useAuth } from '@clerk/expo'
import type { Href } from 'expo-router'
import { Redirect } from 'expo-router'
import { ActivityIndicator, View } from 'react-native'

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth()
  const selectedLanguageId = useLanguageStore((s) => s.selectedLanguageId)

  if (!isLoaded) {
    return (
      <View className='flex-1 justify-center items-center'>
        <ActivityIndicator size='large' color='#5B4CCC' />
      </View>
    )
  }

  if (!isSignedIn) {
    return <Redirect href='/onboarding' />
  }

  if (!selectedLanguageId) {
    return <Redirect href='/language-selection' />
  }

  return <Redirect href={'/(tabs)' as Href} />
}

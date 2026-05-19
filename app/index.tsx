import { useAuth, useClerk } from '@clerk/expo'
import { Redirect } from 'expo-router'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth()
  const { signOut } = useClerk()

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

  return (
    <View className='flex-1 justify-center items-center gap-6'>
      <Text className='h1 text-center color-lingua-purple'>Lingua</Text>
      <TouchableOpacity
        className='bg-lingua-purple px-8 py-4 rounded-2xl'
        activeOpacity={0.85}
        onPress={() => signOut()}
      >
        <Text className='h4 text-white'>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

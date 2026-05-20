import { useAuth, useClerk } from '@clerk/expo'
import { Ionicons } from '@expo/vector-icons'
import { Redirect, useRouter } from 'expo-router'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth()
  const { signOut } = useClerk()
  const router = useRouter()

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
    <View className='flex-1 justify-center items-center gap-6 px-8'>
      <Text className='h1 text-center color-lingua-purple'>Lingua</Text>

      <TouchableOpacity
        className='flex-row items-center gap-2 bg-surface border border-border px-6 py-4 rounded-2xl w-full'
        activeOpacity={0.7}
        onPress={() => router.push('/language-selection')}
      >
        <Ionicons name='language-outline' size={22} color='#6C4EF5' />
        <Text className='h4 text-text-primary flex-1'>Choose a language</Text>
        <Ionicons name='chevron-forward' size={18} color='#6B7280' />
      </TouchableOpacity>

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

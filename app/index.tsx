import { router } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

export default function Index() {
  return (
    <View className='flex-1 justify-center items-center gap-6'>
      <Text className='h1 text-center color-lingua-purple'>Lingua</Text>
      <TouchableOpacity
        className='bg-lingua-purple px-8 py-4 rounded-2xl'
        activeOpacity={0.85}
        onPress={() => router.push('/onboarding')}
      >
        <Text className='h4 text-white'>View Onboarding</Text>
      </TouchableOpacity>
    </View>
  )
}

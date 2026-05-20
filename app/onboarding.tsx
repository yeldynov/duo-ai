import { router } from 'expo-router'
import { usePostHog } from 'posthog-react-native'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '@/constants/images'

export default function Onboarding() {
  const posthog = usePostHog()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View className='flex-1 px-6 pt-4'>
        {/* Logo Header */}
        <View className='flex-row items-center justify-center gap-2'>
          <Image
            source={images.mascotLogo}
            className='w-10 h-10'
            resizeMode='contain'
          />
          <Text className='h3 color-text-primary'>lingua</Text>
        </View>

        {/* Title */}
        <View className='mt-8'>
          <Text className='h1 color-text-primary'>Your AI language</Text>
          <View className='flex-row'>
            <Text className='h1 color-lingua-purple'>teacher</Text>
            <Text className='h1 color-text-primary'>.</Text>
          </View>
        </View>

        {/* Subtitle */}
        <Text className='body-md color-text-secondary mt-3'>
          Real conversations, personalized lessons, anytime, anywhere.
        </Text>

        {/* Mascot with speech bubbles */}
        <View className='flex-1 relative items-center justify-center mt-4'>
          {/* Hello! bubble — left */}
          <View
            className='absolute left-2 bottom-[38%] z-10 bg-[#F0F2FF] rounded-[20px] px-4.5 py-2.5'
            style={styles.shadow}
          >
            <Text className='body-md color-text-primary'>Hello!</Text>
          </View>

          {/* ¡Hola! bubble — upper right */}
          <View
            className='absolute right-2 top-[8%] z-10 bg-[#EEF0FF] rounded-[20px] px-4.5 py-2.5'
            style={styles.shadow}
          >
            <Text className='body-md color-lingua-purple'>¡Hola!</Text>
          </View>

          {/* 你好! bubble — right */}
          <View
            className='absolute right-4 bottom-[32%] z-10 bg-[#FFF1F1] rounded-[20px] px-4.5 py-2.5'
            style={styles.shadow}
          >
            <Text className='body-md text-[#E53E3E]'>你好!</Text>
          </View>

          <Image
            source={images.mascotWelcome}
            className='w-full h-full'
            resizeMode='contain'
          />
        </View>

        {/* Get Started Button */}
        <TouchableOpacity
          className='bg-lingua-purple rounded-[20px] py-4.5 mb-3 flex-row items-center justify-center gap-3'
          activeOpacity={0.85}
          onPress={() => {
            posthog.capture('onboarding_get_started_tapped')
            router.push('/(auth)/sign-up')
          }}
        >
          <Text className='h4 text-white'>Get Started</Text>
          <Text className='text-[22px] text-white font-poppins-semibold leading-6'>
            ›
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
})

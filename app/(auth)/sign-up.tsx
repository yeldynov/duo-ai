import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { useState } from 'react'
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import SocialButton from '@/components/SocialButton'
import VerificationModal from '@/components/VerificationModal'
import { images } from '@/constants/images'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showVerification, setShowVerification] = useState(false)

  const handleSignUp = () => {
    if (!email) return
    setShowVerification(true)
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps='handled'
          showsVerticalScrollIndicator={false}
        >
          {/* Back button */}
          <TouchableOpacity
            className='mt-2 w-9 h-9 items-center justify-center'
            onPress={() => router.back()}
            activeOpacity={0.7}
          >
            <AntDesign name='left' size={20} color='#0D132B' />
          </TouchableOpacity>

          {/* Header */}
          <View className='mt-6 mb-4'>
            <Text className='h1 color-text-primary'>Create your account</Text>
            <Text className='body-md color-text-secondary mt-1'>
              Start your language journey today ✨
            </Text>
          </View>

          {/* Mascot */}
          <View className='items-center my-2'>
            <Image
              source={images.mascotAuth}
              className='w-40 h-35'
              resizeMode='contain'
            />
          </View>

          {/* Email input */}
          <View className='bg-white rounded-2xl border-[1.5px] border-border px-4 pt-2.5 pb-3'>
            <Text className='body-sm color-text-secondary mb-0.5'>Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder='your@email.com'
              placeholderTextColor='#9CA3AF'
              keyboardType='email-address'
              autoCapitalize='none'
              autoCorrect={false}
              style={styles.input}
            />
          </View>

          {/* Password input */}
          <View className='bg-white rounded-2xl border-[1.5px] border-border px-4 pt-2.5 pb-3 mt-3'>
            <Text className='body-sm color-text-secondary mb-0.5'>
              Password
            </Text>
            <View className='flex-row items-center'>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder='••••••••'
                placeholderTextColor='#9CA3AF'
                secureTextEntry={!showPassword}
                autoCapitalize='none'
                autoCorrect={false}
                style={[styles.input, { flex: 1 }]}
              />
              <TouchableOpacity
                className='pl-2'
                onPress={() => setShowPassword(!showPassword)}
                activeOpacity={0.7}
              >
                <Ionicons
                  name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                  size={22}
                  color='#6B7280'
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Sign Up button */}
          <TouchableOpacity
            className='bg-lingua-purple rounded-[20px] py-4.5 items-center mt-5'
            onPress={handleSignUp}
            activeOpacity={0.85}
          >
            <Text className='font-poppins-semibold text-base text-white'>
              Sign Up
            </Text>
          </TouchableOpacity>

          {/* Divider */}
          <View className='flex-row items-center my-5 gap-2.5'>
            <View className='flex-1 h-px bg-border' />
            <Text className='body-sm color-text-secondary'>
              or continue with
            </Text>
            <View className='flex-1 h-px bg-border' />
          </View>

          {/* Social buttons */}
          <SocialButton
            icon={<AntDesign name='google' size={22} color='#EA4335' />}
            label='Continue with Google'
            onPress={() => {}}
          />
          <SocialButton
            icon={<FontAwesome name='facebook' size={22} color='#1877F2' />}
            label='Continue with Facebook'
            onPress={() => {}}
          />
          <SocialButton
            icon={<AntDesign name='apple' size={22} color='#000000' />}
            label='Continue with Apple'
            onPress={() => {}}
          />

          {/* Sign in link */}
          <View className='flex-row justify-center items-center mt-4'>
            <Text className='body-md color-text-secondary'>
              Already have an account?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => router.replace('/(auth)/sign-in')}
              activeOpacity={0.7}
            >
              <Text className='font-poppins-semibold text-sm color-lingua-purple'>
                Log in
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <VerificationModal
        visible={showVerification}
        email={email}
        onClose={() => setShowVerification(false)}
        onVerified={() => {
          setShowVerification(false)
          router.replace('/')
        }}
        onResend={handleSignUp}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  input: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: '#0D132B',
    padding: 0,
  },
})

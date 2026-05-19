import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

interface SocialButtonProps {
  icon: React.ReactNode
  label: string
  onPress: () => void
}

export default function SocialButton({
  icon,
  label,
  onPress,
}: SocialButtonProps) {
  return (
    <TouchableOpacity
      className='flex-row items-center border-[1.5px] border-border rounded-2xl py-3.5 px-5 mb-2.5 bg-white'
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View className='w-7 items-center'>{icon}</View>
      <Text className='font-poppins-medium text-[15px] color-text-primary ml-3'>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

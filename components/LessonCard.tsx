import { images } from '@/constants/images'
import type { LessonStatus } from '@/store/useLessonProgressStore'
import type { Lesson } from '@/types/learning'
import { Ionicons } from '@expo/vector-icons'
import { Image, Text, TouchableOpacity, View } from 'react-native'

type LessonCardProps = {
  lessonNumber: number
  lesson: Lesson
  status: LessonStatus
  onPress: () => void
}

export function LessonCard({
  lessonNumber,
  lesson,
  status,
  onPress,
}: LessonCardProps) {
  const isCompleted = status === 'completed'
  const isInProgress = status === 'in_progress'

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.75}
      className={`mx-4 mb-3 px-4 py-4 flex-row items-center rounded-2xl border-[1.5px] ${
        isInProgress
          ? 'border-lingua-purple bg-[#F5F3FF]'
          : 'border-border bg-background'
      }`}
    >
      <View className='flex-1'>
        <Text
          className='caption mb-0.5'
          style={{ color: isInProgress ? '#6C4EF5' : '#9CA3AF' }}
        >
          Lesson {lessonNumber}
        </Text>
        <Text
          className='body-lg'
          style={{
            fontFamily: isInProgress ? 'Poppins-SemiBold' : 'Poppins-Medium',
            color: isCompleted || !isInProgress ? '#0D132B' : '#0D132B',
          }}
        >
          {lesson.title}
        </Text>
        {isInProgress && (
          <Text className='caption mt-0.5' style={{ color: '#6C4EF5' }}>
            In progress
          </Text>
        )}
        {status === 'available' && (
          <Text className='caption mt-0.5' style={{ color: '#9CA3AF' }}>
            0 / {lesson.activities.length} exercises
          </Text>
        )}
      </View>

      {isCompleted && (
        <View className='w-9 h-9 rounded-full bg-success items-center justify-center'>
          <Ionicons name='checkmark' size={18} color='#FFFFFF' />
        </View>
      )}

      {isInProgress && (
        <Image
          source={images.treasure}
          className='w-12 h-12'
          resizeMode='contain'
        />
      )}

      {status === 'available' && (
        <View className='w-9 h-9 items-center justify-center'>
          <Ionicons name='lock-closed-outline' size={22} color='#9CA3AF' />
        </View>
      )}
    </TouchableOpacity>
  )
}

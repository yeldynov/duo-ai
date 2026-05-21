import { images } from '@/constants/images'
import type { LessonStatus } from '@/store/useLessonProgressStore'
import type { Lesson } from '@/types/learning'
import { Ionicons } from '@expo/vector-icons'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

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
      style={[styles.card, isInProgress && styles.cardActive]}
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
        <View style={styles.checkCircle}>
          <Ionicons name='checkmark' size={18} color='#FFFFFF' />
        </View>
      )}

      {isInProgress && (
        <Image
          source={images.treasure}
          style={styles.progressIcon}
          resizeMode='contain'
        />
      )}

      {status === 'available' && (
        <View style={styles.lockContainer}>
          <Ionicons name='lock-closed-outline' size={22} color='#9CA3AF' />
        </View>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
    marginHorizontal: 16,
    marginBottom: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardActive: {
    borderColor: '#6C4EF5',
    backgroundColor: '#F5F3FF',
  },
  checkCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#21C16B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressIcon: {
    width: 48,
    height: 48,
  },
  lockContainer: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

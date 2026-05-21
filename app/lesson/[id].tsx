import { images } from '@/constants/images'
import { lessons } from '@/data/lessons'
import { units } from '@/data/units'
import { useLessonProgressStore } from '@/store/useLessonProgressStore'
import { useProgressStore } from '@/store/useProgressStore'
import { Ionicons } from '@expo/vector-icons'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useState } from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const router = useRouter()

  const [isMicOn, setIsMicOn] = useState(true)
  const [isSubtitlesOn, setIsSubtitlesOn] = useState(true)
  const [phraseIndex, setPhraseIndex] = useState(0)

  const streak = useProgressStore((s) => s.streak)
  const markLessonComplete = useLessonProgressStore((s) => s.markLessonComplete)

  const lesson = lessons.find((l) => l.id === id)
  const unit = lesson ? units.find((u) => u.id === lesson.unitId) : null

  if (!lesson || !unit) {
    router.replace('/learn')
    return null
  }

  const phrase =
    lesson.phrases.length > 0
      ? lesson.phrases[phraseIndex % lesson.phrases.length]
      : null

  const handleEndCall = () => {
    markLessonComplete(lesson.id)
    router.back()
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View className='flex-row items-center px-4 py-2.5'>
        <TouchableOpacity
          className='w-9 h-9 items-center justify-center'
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Ionicons name='chevron-back' size={24} color='#0D132B' />
        </TouchableOpacity>

        <View className='flex-1 ml-1'>
          <Text
            className='text-lg leading-6 text-[#0D132B]'
            style={{ fontFamily: 'Poppins-Bold' }}
          >
            AI Teacher
          </Text>
          <View className='flex-row items-center mt-[1px]'>
            <View className='w-2 h-2 rounded-full bg-[#21C16B] mr-[5px]' />
            <Text
              className='text-xs text-[#21C16B]'
              style={{ fontFamily: 'Poppins-Regular' }}
            >
              Online
            </Text>
          </View>
        </View>

        <View className='flex-row items-center gap-2'>
          <View className='w-9 h-9 rounded-[18px] border-[1.5px] border-[#E5E7EB] items-center justify-center bg-white'>
            <Ionicons name='videocam-outline' size={18} color='#0D132B' />
          </View>
          <View className='w-9 h-9 rounded-[18px] border-[1.5px] border-[#E5E7EB] items-center justify-center bg-white'>
            <Text
              className='text-[13px] text-[#0D132B]'
              style={{ fontFamily: 'Poppins-SemiBold' }}
            >
              {streak}
            </Text>
          </View>
          <View className='w-9 h-9 rounded-[18px] border-[1.5px] border-[#E5E7EB] items-center justify-center bg-white'>
            <Ionicons name='notifications-outline' size={18} color='#0D132B' />
          </View>
        </View>
      </View>

      {/* Teacher Area — fills all available vertical space */}
      <View style={styles.teacherArea}>
        {/* Room background */}
        <View style={styles.teacherBg} />

        {/* Mascot centered in the frame */}
        <View style={styles.mascotWrapper}>
          <Image
            source={images.mascotWelcome}
            style={styles.mascot}
            resizeMode='contain'
          />
        </View>

        {/* Speech bubble — bottom of teacher area */}
        {isSubtitlesOn && phrase && (
          <View style={styles.speechWrapper}>
            <View style={styles.speechBubble}>
              <View style={styles.speechTextBlock}>
                <Text style={styles.speechLine1}>{phrase.text}</Text>
                <Text style={styles.speechLine2}>{phrase.translation}</Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  setPhraseIndex((i) => (i + 1) % lesson.phrases.length)
                }
                activeOpacity={0.7}
              >
                <Ionicons name='volume-high' size={26} color='#6C4EF5' />
              </TouchableOpacity>
            </View>
            {/* Tail pointing down */}
            <View style={styles.speechTail} />
          </View>
        )}
      </View>

      {/* Controls */}
      <View className='flex-row justify-around px-2 pt-5 pb-2'>
        <ControlButton icon='videocam' label='Camera' />
        <ControlButton
          icon={isMicOn ? 'mic' : 'mic-off'}
          label='Mic'
          onPress={() => setIsMicOn((v) => !v)}
        />
        <ControlButton
          icon='language'
          label='Subtitles'
          onPress={() => setIsSubtitlesOn((v) => !v)}
        />
        <ControlButton
          icon='call'
          label='End Call'
          onPress={handleEndCall}
          variant='danger'
        />
      </View>

      {/* Feedback Card */}
      <View
        className='mx-4 mt-2 mb-4 bg-white rounded-[20px] border-[1.5px] border-[#E5E7EB] flex-row py-[18px]'
        style={styles.feedbackCardShadow}
      >
        <FeedbackItem label='Speaking' value='Excellent' color='#21C16B' />
        <View className='w-[1px] bg-[#E5E7EB] my-1' />
        <FeedbackItem label='Pronunciation' value='Great' color='#6C4EF5' />
        <View className='w-[1px] bg-[#E5E7EB] my-1' />
        <FeedbackItem label='Grammar' value='Good' color='#6C4EF5' />
      </View>
    </SafeAreaView>
  )
}

function ControlButton({
  icon,
  label,
  onPress,
  variant,
}: {
  icon: keyof typeof Ionicons.glyphMap
  label: string
  onPress?: () => void
  variant?: 'danger'
}) {
  return (
    <View className='items-center gap-2'>
      <TouchableOpacity
        className={`w-16 h-16 rounded-full items-center justify-center ${variant === 'danger' ? 'bg-[#EF4444]' : 'bg-white'}`}
        style={styles.controlBtnShadow}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <Ionicons
          name={icon}
          size={26}
          color={variant === 'danger' ? '#FFFFFF' : '#0D132B'}
        />
      </TouchableOpacity>
      <Text
        className='text-xs text-[#6B7280]'
        style={{ fontFamily: 'Poppins-Regular' }}
      >
        {label}
      </Text>
    </View>
  )
}

function FeedbackItem({
  label,
  value,
  color,
}: {
  label: string
  value: string
  color: string
}) {
  return (
    <View className='flex-1 items-center gap-[5px]'>
      <Text
        className='text-[13px] text-[#0D132B]'
        style={{ fontFamily: 'Poppins-Medium' }}
      >
        {label}
      </Text>
      <Text
        className='text-sm'
        style={{ fontFamily: 'Poppins-SemiBold', color }}
      >
        {value}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  teacherArea: {
    flex: 1,
    marginHorizontal: 16,
    borderRadius: 24,
    overflow: 'hidden',
    position: 'relative',
  },
  teacherBg: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#C2AA8F',
  },
  mascotWrapper: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mascot: {
    width: '100%',
    height: '100%',
  },
  speechWrapper: {
    position: 'absolute',
    bottom: 14,
    left: 14,
    right: 14,
  },
  speechBubble: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingHorizontal: 18,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  speechTextBlock: {
    flex: 1,
    marginRight: 12,
  },
  speechLine1: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#0D132B',
    lineHeight: 24,
  },
  speechLine2: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: '#0D132B',
    lineHeight: 22,
  },
  speechTail: {
    width: 0,
    height: 0,
    borderLeftWidth: 11,
    borderRightWidth: 11,
    borderTopWidth: 13,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#FFFFFF',
    marginLeft: 28,
  },
  controlBtnShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  feedbackCardShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
})

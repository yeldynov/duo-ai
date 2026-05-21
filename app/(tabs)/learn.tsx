import { LessonCard } from '@/components/LessonCard'
import { lessons } from '@/data/lessons'
import { units } from '@/data/units'
import { useLanguageStore } from '@/store/useLanguageStore'
import { useLessonProgressStore } from '@/store/useLessonProgressStore'
import { Ionicons } from '@expo/vector-icons'
import { Href, useRouter } from 'expo-router'
import { useState } from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

type Tab = 'lessons' | 'practice'

export default function LearnScreen() {
  const [activeTab, setActiveTab] = useState<Tab>('lessons')
  const router = useRouter()

  const selectedLanguageId = useLanguageStore((s) => s.selectedLanguageId)
  const getLessonStatus = useLessonProgressStore((s) => s.getLessonStatus)
  const setInProgressLesson = useLessonProgressStore(
    (s) => s.setInProgressLesson,
  )

  const langId = selectedLanguageId ?? 'es'

  const unit = units.find((u) => u.languageId === langId) ?? units[0]

  const unitLessons = unit.lessonIds
    .map((id) => lessons.find((l) => l.id === id))
    .filter((l): l is NonNullable<typeof l> => l !== undefined)

  const completedCount = unitLessons.filter(
    (l) => getLessonStatus(l.id) === 'completed',
  ).length

  const inProgressLesson =
    unitLessons.find((l) => getLessonStatus(l.id) === 'in_progress') ??
    unitLessons.find((l) => getLessonStatus(l.id) === 'available') ??
    unitLessons[0]

  const currentLessonIndex =
    completedCount === unitLessons.length
      ? unitLessons.length
      : inProgressLesson
        ? unitLessons.indexOf(inProgressLesson) + 1
        : completedCount + 1

  const heroImage = inProgressLesson?.image

  const handleLessonPress = (lessonId: string) => {
    const status = getLessonStatus(lessonId)
    if (status === 'available') {
      setInProgressLesson(lessonId)
    }
    router.push(`/lesson/${lessonId}` as Href)
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View className='flex-row items-center px-4 py-3'>
        <TouchableOpacity
          className='w-9 h-9 items-center justify-center'
          activeOpacity={0.7}
          onPress={() => router.back()}
        >
          <Ionicons name='chevron-back' size={24} color='#0D132B' />
        </TouchableOpacity>

        <View className='flex-1 mx-2'>
          <Text
            className='text-xl leading-[26px] text-[#0D132B]'
            style={{ fontFamily: 'Poppins-SemiBold' }}
            numberOfLines={1}
          >
            {inProgressLesson?.title ?? unit.title}
          </Text>
          <Text
            className='text-[13px] leading-[18px] text-[#6B7280] mt-[1px]'
            style={{ fontFamily: 'Poppins-Regular' }}
          >
            Unit 1 • {currentLessonIndex} / {unitLessons.length} lessons
          </Text>
        </View>

        <View className='w-9 h-9 items-center justify-center'>
          <Ionicons name='bookmark-outline' size={24} color='#6C4EF5' />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Hero Image */}
        <View className='mx-4 rounded-[20px] overflow-hidden'>
          {heroImage ? (
            <Image
              source={{ uri: heroImage }}
              className='w-full h-[220px] rounded-[20px]'
              resizeMode='cover'
            />
          ) : (
            <View className='w-full h-[220px] rounded-[20px] bg-[#F3F4F6]' />
          )}
        </View>

        {/* Lessons / Practice Tabs */}
        <View className='flex-row mt-5 mx-4 border-b border-[#E5E7EB] mb-4'>
          <TouchableOpacity
            className='flex-1 items-center pb-3 relative'
            onPress={() => setActiveTab('lessons')}
            activeOpacity={0.8}
          >
            <Text
              className='text-[15px]'
              style={{
                fontFamily:
                  activeTab === 'lessons' ? 'Poppins-SemiBold' : 'Poppins-Medium',
                color: activeTab === 'lessons' ? '#6C4EF5' : '#9CA3AF',
              }}
            >
              Lessons
            </Text>
            {activeTab === 'lessons' && (
              <View className='absolute -bottom-[1px] left-4 right-4 h-[2.5px] bg-[#6C4EF5] rounded-[2px]' />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            className='flex-1 items-center pb-3 relative'
            onPress={() => setActiveTab('practice')}
            activeOpacity={0.8}
          >
            <Text
              className='text-[15px]'
              style={{
                fontFamily:
                  activeTab === 'practice'
                    ? 'Poppins-SemiBold'
                    : 'Poppins-Medium',
                color: activeTab === 'practice' ? '#6C4EF5' : '#9CA3AF',
              }}
            >
              Practice
            </Text>
            {activeTab === 'practice' && (
              <View className='absolute -bottom-[1px] left-4 right-4 h-[2.5px] bg-[#6C4EF5] rounded-[2px]' />
            )}
          </TouchableOpacity>
        </View>

        {/* Lesson List */}
        {activeTab === 'lessons' && (
          <View className='pt-1'>
            {unitLessons.map((lesson, index) => (
              <LessonCard
                key={lesson.id}
                lessonNumber={index + 1}
                lesson={lesson}
                status={getLessonStatus(lesson.id)}
                onPress={() => handleLessonPress(lesson.id)}
              />
            ))}
          </View>
        )}

        {activeTab === 'practice' && (
          <View className='items-center pt-12 px-8'>
            <Ionicons name='barbell-outline' size={48} color='#D1D5DB' />
            <Text
              className='text-base text-[#6B7280] mt-3'
              style={{ fontFamily: 'Poppins-SemiBold' }}
            >
              Practice coming soon
            </Text>
            <Text
              className='text-[13px] text-[#9CA3AF] text-center mt-1.5'
              style={{ fontFamily: 'Poppins-Regular' }}
            >
              Complete lessons first to unlock practice mode.
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingBottom: 32,
  },
})

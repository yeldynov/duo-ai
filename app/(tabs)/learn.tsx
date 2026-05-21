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

  const inProgressLesson =
    unitLessons.find((l) => getLessonStatus(l.id) === 'in_progress') ??
    unitLessons.find((l) => getLessonStatus(l.id) === 'available')

  const completedCount = unitLessons.filter(
    (l) => getLessonStatus(l.id) === 'completed',
  ).length

  const currentLessonIndex = inProgressLesson
    ? unitLessons.indexOf(inProgressLesson) + 1
    : completedCount

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
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Ionicons name='chevron-back' size={24} color='#0D132B' />
        </TouchableOpacity>

        <View className='flex-1 mx-2'>
          <Text className='h3' style={{ color: '#0D132B' }} numberOfLines={1}>
            {inProgressLesson?.title ?? unit.title}
          </Text>
          <Text style={styles.headerSubtitle}>
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
              style={styles.heroImage}
              resizeMode='cover'
            />
          ) : (
            <View style={[styles.heroImage, styles.heroPlaceholder]} />
          )}
        </View>

        {/* Lessons / Practice Tabs */}
        <View style={styles.tabRow}>
          <TouchableOpacity
            className='flex-1 items-center pb-3'
            onPress={() => setActiveTab('lessons')}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.tabLabel,
                activeTab === 'lessons' && styles.tabLabelActive,
              ]}
            >
              Lessons
            </Text>
            {activeTab === 'lessons' && <View style={styles.tabUnderline} />}
          </TouchableOpacity>

          <TouchableOpacity
            className='flex-1 items-center pb-3'
            onPress={() => setActiveTab('practice')}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.tabLabel,
                activeTab === 'practice' && styles.tabLabelActive,
              ]}
            >
              Practice
            </Text>
            {activeTab === 'practice' && <View style={styles.tabUnderline} />}
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
            <Text style={styles.practiceEmptyTitle}>Practice coming soon</Text>
            <Text style={styles.practiceEmptySubtitle}>
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
  headerSubtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    lineHeight: 18,
    color: '#6B7280',
    marginTop: 1,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  heroImage: {
    width: '100%',
    height: 220,
    borderRadius: 20,
  },
  heroPlaceholder: {
    backgroundColor: '#F3F4F6',
  },
  tabRow: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    marginBottom: 16,
  },
  tabLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    color: '#9CA3AF',
  },
  tabLabelActive: {
    color: '#6C4EF5',
    fontFamily: 'Poppins-SemiBold',
  },
  tabUnderline: {
    position: 'absolute',
    bottom: -1,
    left: 16,
    right: 16,
    height: 2.5,
    backgroundColor: '#6C4EF5',
    borderRadius: 2,
  },
  practiceEmptyTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#6B7280',
    marginTop: 12,
  },
  practiceEmptySubtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#9CA3AF',
    textAlign: 'center',
    marginTop: 6,
  },
})

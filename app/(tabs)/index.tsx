import { images } from '@/constants/images'
import { languages } from '@/data/languages'
import { lessons } from '@/data/lessons'
import { units } from '@/data/units'
import { useLanguageStore } from '@/store/useLanguageStore'
import { useProgressStore } from '@/store/useProgressStore'
import { useUser } from '@clerk/expo'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { usePostHog } from 'posthog-react-native'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const GREETINGS: Record<string, string> = {
  es: 'Hola',
  fr: 'Bonjour',
  ja: 'こんにちは',
  ko: '안녕하세요',
  de: 'Hallo',
  zh: '你好',
  pt: 'Olá',
  it: 'Ciao',
  ru: 'Привет',
  ar: 'مرحبا',
}

export default function HomeScreen() {
  const router = useRouter()
  const posthog = usePostHog()
  const { user } = useUser()
  const { selectedLanguageId } = useLanguageStore()
  const { xp, xpGoal, streak } = useProgressStore()

  const currentLanguage =
    languages.find((l) => l.id === selectedLanguageId) ?? languages[0]
  const languageUnits = units.filter((u) => u.languageId === currentLanguage.id)
  const currentUnit = languageUnits[0]
  const currentLesson = currentUnit
    ? lessons.find((l) => currentUnit.lessonIds.includes(l.id))
    : null

  const greeting = GREETINGS[currentLanguage.id] ?? 'Hello'
  const firstName = user?.firstName ?? 'Learner'
  const progress = Math.max(0, Math.min(1, xp / Math.max(1, xpGoal)))

  const todayPlan = [
    {
      id: '1',
      iconName: 'book' as const,
      iconBg: '#6C4EF5',
      title: 'Lesson',
      subtitle: currentLesson?.title ?? 'Start learning',
      // TODO: derive from progress store when lesson completion tracking is added
      completed: false,
    },
    {
      id: '2',
      iconName: 'headset' as const,
      iconBg: '#4D8BFF',
      title: 'AI Conversation',
      subtitle: 'Talk about your day',
      completed: false,
    },
    {
      id: '3',
      iconName: 'chatbubble' as const,
      iconBg: '#FF4B4B',
      title: 'New words',
      subtitle: `${currentLesson?.vocabulary?.length ?? 10} words`,
      completed: false,
    },
  ]

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* ── Header ─────────────────────────────────────────────── */}
        <View className='flex-row items-center justify-between px-5 pt-2 pb-4'>
          <View className='flex-row items-center gap-2.5'>
            <View className='w-10 h-10 rounded-full overflow-hidden border-2 border-border'>
              <Image
                source={{ uri: currentLanguage.flag }}
                className='w-10 h-10'
                resizeMode='cover'
              />
            </View>
            <Text className='h4 text-text-primary'>
              {greeting}, {firstName}! 👋
            </Text>
          </View>
          <View className='flex-row items-center gap-3.5'>
            <View className='flex-row items-center gap-1'>
              <Image
                source={images.streakFire}
                className='w-5.5 h-5.5'
                resizeMode='contain'
              />
              <Text className='font-poppins-semibold text-[14px] text-text-primary'>
                {streak}
              </Text>
            </View>
            <View>
              <Ionicons
                name='notifications-outline'
                size={24}
                color='#0D132B'
              />
            </View>
          </View>
        </View>

        {/* ── Daily Goal Card ─────────────────────────────────────── */}
        <View className='mx-5 mb-4 rounded-2xl bg-[#FEF3E2] px-5 py-4 flex-row items-center'>
          <View className='flex-1 pr-4'>
            <Text className='caption text-text-secondary mb-0.5'>
              Daily goal
            </Text>
            <View className='flex-row items-baseline gap-1 mb-3.5'>
              <Text className='h1 text-text-primary'>{xp}</Text>
              <Text className='body-md text-text-secondary'>/ {xpGoal} XP</Text>
            </View>
            <View className='h-2.5 rounded-full bg-border overflow-hidden'>
              <View
                className='h-full rounded-full bg-streak'
                style={{ width: `${progress * 100}%` }}
              />
            </View>
          </View>
          <Image
            source={images.treasure}
            className='w-20 h-20'
            resizeMode='contain'
          />
        </View>

        {/* ── Continue Learning Banner ────────────────────────────── */}
        <View className='mx-5 mb-5 rounded-2xl overflow-hidden bg-lingua-deep-purple relative'>
          <View style={styles.decCircle1} />
          <View style={styles.decCircle2} />
          <View style={styles.decCircle3} />

          <View className='flex-row items-stretch min-h-40'>
            <View className='flex-1 px-5 py-5 justify-between'>
              <View>
                <Text
                  className='body-sm mb-1'
                  style={{ color: 'rgba(255,255,255,0.8)' }}
                >
                  Continue learning
                </Text>
                <Text className='font-poppins-bold text-[28px] text-white mb-1'>
                  {currentLanguage.name}
                </Text>
                <Text
                  className='body-sm mb-4'
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  {currentUnit ? `A1 • Unit ${currentUnit.order}` : 'No units available'}
                </Text>
              </View>
              <TouchableOpacity
                className='rounded-full px-6 py-2.5 self-start bg-white'
                onPress={() => {
                  posthog.capture('continue_learning_tapped', {
                    language_id: currentLanguage.id,
                    language_name: currentLanguage.name,
                    unit: currentUnit?.order ?? null,
                  })
                  router.push('/(tabs)/learn')
                }}
              >
                <Text className='font-poppins-semibold text-[14px] text-lingua-deep-purple'>
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
            <View className='w-37.5 overflow-hidden justify-end'>
              <Image
                source={images.palace}
                style={styles.palaceImage}
                resizeMode='cover'
              />
            </View>
          </View>
        </View>

        {/* ── Today's Plan ────────────────────────────────────────── */}
        <View className='px-5 mb-4'>
          <View className='flex-row items-center justify-between mb-1'>
            <Text className='h4 text-text-primary'>{"Today's plan"}</Text>
            <TouchableOpacity onPress={() => router.push('/(tabs)/learn')}>
              <Text className='font-poppins-semibold text-[14px] text-lingua-purple'>
                View all
              </Text>
            </TouchableOpacity>
          </View>

          {todayPlan.map((item, index) => (
            <View
              key={item.id}
              className='flex-row items-center py-3'
              style={
                index < todayPlan.length - 1
                  ? { borderBottomWidth: 1, borderBottomColor: '#F3F4F6' }
                  : undefined
              }
            >
              <View
                className='w-11 h-11 rounded-xl items-center justify-center mr-3'
                style={{ backgroundColor: item.iconBg }}
              >
                <Ionicons name={item.iconName} size={20} color='#FFFFFF' />
              </View>
              <View className='flex-1'>
                <Text className='font-poppins-semibold text-[14px] text-text-primary mb-px'>
                  {item.title}
                </Text>
                <Text className='body-sm text-text-secondary'>
                  {item.subtitle}
                </Text>
              </View>
              {item.completed ? (
                <View className='w-7 h-7 rounded-full bg-lingua-purple items-center justify-center'>
                  <Ionicons name='checkmark' size={16} color='#FFFFFF' />
                </View>
              ) : (
                <View className='w-7 h-7 rounded-full border-2 border-[#D1D5DB]' />
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 100,
  },
  decCircle1: {
    position: 'absolute',
    top: -30,
    right: 50,
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: 'rgba(255,255,255,0.07)',
  },
  decCircle2: {
    position: 'absolute',
    top: 60,
    right: 90,
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  decCircle3: {
    position: 'absolute',
    bottom: -20,
    left: 30,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(255,255,255,0.04)',
  },
  palaceImage: {
    width: 150,
    height: 160,
  },
})

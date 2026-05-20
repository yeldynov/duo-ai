import { images } from '@/constants/images'
import { languages } from '@/data/languages'
import { useLanguageStore } from '@/store/useLanguageStore'
import type { Language } from '@/types/learning'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { usePostHog } from 'posthog-react-native'
import { useState } from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function LanguageSelection() {
  const router = useRouter()
  const posthog = usePostHog()
  const [selected, setSelected] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const setSelectedLanguage = useLanguageStore((s) => s.setSelectedLanguage)

  const filtered = languages.filter((lang) =>
    lang.name.toLowerCase().includes(search.toLowerCase()),
  )

  function handleConfirm() {
    if (!selected) return
    const language = languages.find((l) => l.id === selected)
    posthog.capture('language_confirmed', {
      language_id: selected,
      language_name: language?.name,
    })
    setSelectedLanguage(selected)
    router.replace('/')
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View className='flex-row items-center px-4 py-3'>
        <TouchableOpacity
          onPress={() => router.back()}
          activeOpacity={0.7}
          className='p-1 mr-2'
        >
          <Ionicons name='chevron-back' size={24} color='#0D132B' />
        </TouchableOpacity>
        <Text className='h3 flex-1 text-center text-text-primary mr-8'>
          Choose a language
        </Text>
      </View>

      {/* Search */}
      <View className='px-4 mb-4'>
        <View className='flex-row items-center bg-surface rounded-full px-4 py-3 border border-border'>
          <Ionicons name='search' size={18} color='#6B7280' />
          <TextInput
            className='flex-1 ml-2 body-md text-text-primary'
            placeholder='Search languages'
            placeholderTextColor='#6B7280'
            value={search}
            onChangeText={setSearch}
            style={styles.input}
          />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Section label */}
        <Text className='h4 text-text-primary px-4 mb-3'>Popular</Text>

        {/* Language list */}
        <View className='px-4 gap-1'>
          {filtered.map((lang, index) => (
            <LanguageRow
              key={lang.id}
              language={lang}
              isSelected={selected === lang.id}
              isLast={index === filtered.length - 1}
              onPress={() => setSelected(lang.id)}
            />
          ))}
        </View>

        {/* Earth illustration */}
        <View className='items-center mt-6'>
          <Image
            source={images.earth}
            className='w-full h-45'
            resizeMode='contain'
          />
        </View>
      </ScrollView>

      {/* Confirm button */}
      <View className='px-4 pb-6 pt-2'>
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={handleConfirm}
          disabled={!selected}
          className={`bg-lingua-purple rounded-2xl py-4${!selected ? ' opacity-40' : ''}`}
        >
          <Text className='h4 text-white text-center'>Confirm language</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

// ─── LanguageRow ──────────────────────────────────────────────────────────────

function LanguageRow({
  language,
  isSelected,
  isLast,
  onPress,
}: {
  language: Language
  isSelected: boolean
  isLast: boolean
  onPress: () => void
}) {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        className={`flex-row items-center py-3.5 px-4 rounded-2xl${isSelected ? ' bg-[#EDE9FF] border-[1.5px] border-lingua-purple' : ''}`}
      >
        {/* Flag */}
        <Image source={{ uri: language.flag }} className='w-11 h-11 rounded-full bg-gray-100' />

        {/* Text */}
        <View className='flex-1 ml-3'>
          <Text className='h4 text-text-primary'>{language.name}</Text>
          {language.learners && (
            <Text className='body-sm text-text-secondary'>
              {language.learners}
            </Text>
          )}
        </View>

        {/* Indicator */}
        {isSelected ? (
          <View className='w-7 h-7 rounded-full bg-lingua-purple items-center justify-center'>
            <Ionicons name='checkmark' size={16} color='#fff' />
          </View>
        ) : (
          <Ionicons name='chevron-forward' size={18} color='#6B7280' />
        )}
      </TouchableOpacity>

      {!isLast && !isSelected && <View className='h-px bg-border mx-4' />}
    </>
  )
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  input: {
    paddingVertical: 0,
  },
  scrollContent: {
    paddingBottom: 16,
  },
})

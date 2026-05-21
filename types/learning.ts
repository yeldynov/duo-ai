// ─── Language ────────────────────────────────────────────────────────────────

export type Language = {
  id: string
  name: string
  nativeName: string
  flag: string // emoji flag
  code: string // ISO 639-1
  learners?: string // e.g. "28.4M learners"
}

// ─── Vocabulary ───────────────────────────────────────────────────────────────

export type VocabularyItem = {
  word: string
  translation: string
  pronunciation?: string // phonetic hint, e.g. "bweh-nohs dee-ahs"
  example?: string // example sentence in the target language
}

// ─── Phrase ───────────────────────────────────────────────────────────────────

export type Phrase = {
  text: string
  translation: string
  pronunciation?: string
}

// ─── Activity ─────────────────────────────────────────────────────────────────

export type ActivityType =
  | 'vocabulary' // tap the matching translation
  | 'listen_and_select' // hear audio and pick the right word
  | 'fill_in_blank' // complete the sentence
  | 'match_pairs' // drag to match pairs
  | 'ai_teacher' // Vision Agent video/audio lesson

export type Activity = {
  id: string
  type: ActivityType
  question: string
  options?: string[] // for multiple-choice / match activities
  answer: string // correct option or expected text
  hint?: string
}

// ─── Lesson ───────────────────────────────────────────────────────────────────

export type Lesson = {
  id: string
  unitId: string
  title: string
  description: string
  xpReward: number
  image?: string // hero image URI (remote or local)
  /** Used by the AI teacher / Vision Agent for context */
  aiTeacherPrompt: string
  goals: string[] // what the learner will know after the lesson
  vocabulary: VocabularyItem[]
  phrases: Phrase[]
  activities: Activity[]
}

// ─── Unit ─────────────────────────────────────────────────────────────────────

export type Unit = {
  id: string
  languageId: string
  title: string
  description: string
  order: number // display order within the language course
  color: string // accent color for the unit card (hex)
  lessonIds: string[]
}

import type { Unit } from '@/types/learning'

export const units: Unit[] = [
  // ── Spanish ───────────────────────────────────────────────────────────────
  {
    id: 'es-unit-1',
    languageId: 'es',
    title: 'Greetings & Basics',
    description: 'Say hello, introduce yourself, and ask how someone is doing.',
    order: 1,
    color: '#58CC02',
    lessonIds: ['es-lesson-1', 'es-lesson-2'],
  },
  {
    id: 'es-unit-2',
    languageId: 'es',
    title: 'Numbers & Colors',
    description: 'Count to twenty and name common colors.',
    order: 2,
    color: '#1CB0F6',
    lessonIds: ['es-lesson-3'],
  },

  // ── French ────────────────────────────────────────────────────────────────
  {
    id: 'fr-unit-1',
    languageId: 'fr',
    title: 'Bonjour!',
    description: 'French greetings, introductions, and polite phrases.',
    order: 1,
    color: '#FF9600',
    lessonIds: ['fr-lesson-1', 'fr-lesson-2'],
  },

  // ── Japanese ──────────────────────────────────────────────────────────────
  {
    id: 'ja-unit-1',
    languageId: 'ja',
    title: 'First Words',
    description: 'Essential Japanese greetings and self-introduction.',
    order: 1,
    color: '#FF4B4B',
    lessonIds: ['ja-lesson-1'],
  },

  // ── German ────────────────────────────────────────────────────────────────
  {
    id: 'de-unit-1',
    languageId: 'de',
    title: 'Hallo!',
    description: 'German greetings, farewells, and basic introductions.',
    order: 1,
    color: '#CE82FF',
    lessonIds: ['de-lesson-1'],
  },
]

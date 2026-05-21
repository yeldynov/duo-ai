import * as SecureStore from 'expo-secure-store'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

const secureStorage = {
  getItem: (key: string) => SecureStore.getItemAsync(key),
  setItem: (key: string, value: string) => SecureStore.setItemAsync(key, value),
  removeItem: (key: string) => SecureStore.deleteItemAsync(key),
}

export type LessonStatus = 'completed' | 'in_progress' | 'available'

type LessonProgressStore = {
  completedLessonIds: string[]
  inProgressLessonId: string | null
  markLessonComplete: (id: string) => void
  setInProgressLesson: (id: string) => void
  getLessonStatus: (id: string) => LessonStatus
}

export const useLessonProgressStore = create<LessonProgressStore>()(
  persist(
    (set, get) => ({
      completedLessonIds: ['es-lesson-1', 'es-lesson-2'],
      inProgressLessonId: 'es-lesson-3',
      markLessonComplete: (id) =>
        set((s) => ({
          completedLessonIds: [...new Set([...s.completedLessonIds, id])],
          inProgressLessonId:
            s.inProgressLessonId === id ? null : s.inProgressLessonId,
        })),
      setInProgressLesson: (id) => set({ inProgressLessonId: id }),
      getLessonStatus: (id): LessonStatus => {
        const { completedLessonIds, inProgressLessonId } = get()
        if (completedLessonIds.includes(id)) return 'completed'
        if (inProgressLessonId === id) return 'in_progress'
        return 'available'
      },
    }),
    {
      name: 'lesson-progress-storage',
      storage: createJSONStorage(() => secureStorage),
    },
  ),
)

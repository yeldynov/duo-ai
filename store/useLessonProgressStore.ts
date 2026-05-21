import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

const asyncStorage = {
  getItem: async (key: string) => {
    return await AsyncStorage.getItem(key)
  },
  setItem: async (key: string, value: string) => {
    return await AsyncStorage.setItem(key, value)
  },
  removeItem: async (key: string) => {
    return await AsyncStorage.removeItem(key)
  },
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
      completedLessonIds: [],
      inProgressLessonId: null,
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
      storage: createJSONStorage(() => asyncStorage),
    },
  ),
)

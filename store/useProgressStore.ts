import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type ProgressStore = {
  xp: number
  xpGoal: number
  streak: number
  addXp: (amount: number) => void
  setXpGoal: (goal: number) => void
  incrementStreak: () => void
  resetStreak: () => void
}

export const useProgressStore = create<ProgressStore>()(
  persist(
    (set) => ({
      xp: 15,
      xpGoal: 20,
      streak: 12,
      addXp: (amount) =>
        set((s) => ({ xp: Math.min(Math.max(s.xp + amount, 0), s.xpGoal) })),
      setXpGoal: (goal) =>
        set((s) => {
          const clampedGoal = Math.max(goal, 0)
          return {
            xpGoal: clampedGoal,
            xp: s.xp > clampedGoal ? clampedGoal : s.xp,
          }
        }),
      incrementStreak: () => set((s) => ({ streak: s.streak + 1 })),
      resetStreak: () => set({ streak: 0 }),
    }),
    {
      name: 'progress-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)

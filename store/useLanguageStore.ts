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

type LanguageStore = {
  selectedLanguageId: string | null
  _hasHydrated: boolean
  setSelectedLanguage: (id: string) => void
  clearSelectedLanguage: () => void
  setHasHydrated: (hasHydrated: boolean) => void
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      selectedLanguageId: null,
      _hasHydrated: false,
      setSelectedLanguage: (id) => set({ selectedLanguageId: id }),
      clearSelectedLanguage: () => set({ selectedLanguageId: null }),
      setHasHydrated: (hasHydrated) => set({ _hasHydrated: hasHydrated }),
    }),
    {
      name: 'language-storage',
      storage: createJSONStorage(() => asyncStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true)
      },
    },
  ),
)

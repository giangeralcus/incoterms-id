import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useLanguageStore = create(
  persist(
    (set) => ({
      lang: 'id', // default Indonesian
      toggleLang: () => set(state => ({ lang: state.lang === 'id' ? 'en' : 'id' })),
      setLang: (lang) => set({ lang }),
    }),
    { name: 'belajar-ekspor-impor-lang' }
  )
)

export default useLanguageStore

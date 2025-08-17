import { create } from 'zustand'
import { persist } from 'zustand/middleware'


export interface UnlockState {

  mind: boolean
  body: boolean
  spirit: boolean
}


export interface GameState {

  unlocked: UnlockState
  sfx: boolean
  reducedMotion: boolean
  setUnlocked: (section: keyof UnlockState, value?: boolean) => void
  toggleSfx: () => void
}

export const useGameStore = create<GameState>()(

  persist<GameState>(

    (set) => {
      const reduced =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      return {
        unlocked: { mind: false, body: false, spirit: false },
        sfx: true,
        reducedMotion: reduced,
        setUnlocked: (section, value = true) =>
          set((state) => ({
            unlocked: { ...state.unlocked, [section]: value }
          })),
        toggleSfx: () => set((state) => ({ sfx: !state.sfx }))
      }
    },
    {
      name: 'arsh-game-state'
    }
  )
)

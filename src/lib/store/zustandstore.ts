import { TZustand } from '@/types/zustand'
import { create } from 'zustand'

interface State {
    data: TZustand | null
    decreaseData: () => void
    increaseData: () => void
    setData: (value: number) => void
}

export const useZustand = create<State>((set) => ({
    data: null,
    decreaseData: () => set((state) => ({ data: { value: (state.data?.value || 0) - 1 } })),
    increaseData: () => set((state) => ({ data: { value: (state.data?.value || 0) + 1 } })),
    setData: (value) =>set(() => ({ data: { value } }))
}))
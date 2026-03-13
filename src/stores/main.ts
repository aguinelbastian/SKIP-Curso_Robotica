import React, { createContext, useContext, useState, useMemo } from 'react'

type StoreState = {
  progress: number
  setProgress: (p: number) => void
  nextSession: string | null
  setNextSession: (s: string | null) => void
  completedLessons: string[]
  markLessonComplete: (id: string) => void
}

const StoreContext = createContext<StoreState | null>(null)

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [progress, setProgress] = useState(35)
  const [nextSession, setNextSession] = useState<string | null>('15 de Outubro, 14:00')
  const [completedLessons, setCompletedLessons] = useState<string[]>(['lesson-1', 'lesson-2'])

  const markLessonComplete = (id: string) => {
    if (!completedLessons.includes(id)) {
      setCompletedLessons((prev) => [...prev, id])
      setProgress((prev) => Math.min(100, prev + 5))
    }
  }

  const value = useMemo(
    () => ({
      progress,
      setProgress,
      nextSession,
      setNextSession,
      completedLessons,
      markLessonComplete,
    }),
    [progress, nextSession, completedLessons],
  )

  return React.createElement(StoreContext.Provider, { value }, children)
}

export default function useMainStore() {
  const context = useContext(StoreContext)
  if (!context) throw new Error('useMainStore must be used within StoreProvider')
  return context
}

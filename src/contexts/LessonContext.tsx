import { createContext, ReactNode, useEffect, useState } from 'react'

import { LESSONS_KEY } from '../config/storage'

export type LessonProps = {
  slug: string
  title: string
  commitLink?: string
  description: string
}

export interface LessonContextData {
  lessons: LessonProps[]
  exportLessons: () => Promise<void>
  createLesson: (lesson: LessonProps) => void
}

export const LessonContext = createContext({} as LessonContextData)

interface LessonProviderProps {
  children: ReactNode
}
export function LessonProvider({ children }: LessonProviderProps) {
  const [lessons, setLessons] = useState<LessonProps[]>([])

  function handleAddLesson({
    description,
    slug,
    title,
    commitLink,
  }: LessonProps) {
    const storageLessons = localStorage.getItem(LESSONS_KEY)

    const lessons: LessonProps[] = storageLessons
      ? JSON.parse(storageLessons)
      : []

    const findLesson = lessons.find((lesson) => lesson.slug === slug)

    if (findLesson) {
      throw new Error('Essa aula já foi adicionada')
    }

    const data = [
      ...lessons,
      {
        slug,
        title,
        commitLink,
        description,
      },
    ]

    setLessons(data)

    localStorage.setItem(LESSONS_KEY, JSON.stringify(data))
  }

  async function handleExportLessons() {
    const formattedTexts = lessons.map((lesson) => {
      const commit = lesson.commitLink
        ? `${'\n\n'}[Commit: ${lesson.title}](${lesson.commitLink})`
        : ''

      return `## ${lesson.title} ${'\n'}${lesson.description}${commit}`
    })

    const lessonsDescriptions = formattedTexts.join('\n')

    await navigator.clipboard.writeText(lessonsDescriptions)
  }

  useEffect(() => {
    const storageLessons = localStorage.getItem(LESSONS_KEY)

    const lessons: LessonProps[] = storageLessons
      ? JSON.parse(storageLessons)
      : []

    setLessons(lessons)
  }, [])

  return (
    <LessonContext.Provider
      value={{
        lessons,
        createLesson: handleAddLesson,
        exportLessons: handleExportLessons,
      }}
    >
      {children}
    </LessonContext.Provider>
  )
}

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
  cluster: string
  changeCluster: (value: string) => void
  exportLessons: () => Promise<void>
  createLesson: (lesson: LessonProps) => void
  saveLesson: (lesson: LessonProps) => void
  clearLessons: () => void
}

export const LessonContext = createContext({} as LessonContextData)

interface LessonProviderProps {
  children: ReactNode
}
export function LessonProvider({ children }: LessonProviderProps) {
  const [lessons, setLessons] = useState<LessonProps[]>([])
  const [cluster, setCluster] = useState('')

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

  function handleSaveLesson({
    description,
    slug,
    title,
    commitLink,
  }: LessonProps) {
    const storageLessons = localStorage.getItem(LESSONS_KEY)

    const lessons: LessonProps[] = storageLessons
      ? JSON.parse(storageLessons)
      : []

    const newLessons = lessons.map((lesson) =>
      lesson.slug === slug ? { slug, title, commitLink, description } : lesson,
    )

    setLessons(newLessons)

    localStorage.setItem(LESSONS_KEY, JSON.stringify(newLessons))
  }

  async function handleExportLessons() {
    const formattedTexts = lessons.map((lesson) => {
      const commit = lesson.commitLink
        ? `${'\n'}[Commit: ${lesson.title}](${lesson.commitLink})`
        : ''

      return `### ${lesson.title} ${commit}${'\n\n'}${lesson.description}`
    })

    const lessonsDescriptions = `## ${cluster}${'\n'}${formattedTexts.join(
      '\n',
    )}`

    await navigator.clipboard.writeText(lessonsDescriptions)
  }

  function handleChangeCluster(value: string) {
    setCluster(value)
  }

  function handleClearLessons() {
    setLessons([])
    localStorage.removeItem(LESSONS_KEY)
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
        cluster,
        changeCluster: handleChangeCluster,
        createLesson: handleAddLesson,
        exportLessons: handleExportLessons,
        clearLessons: handleClearLessons,
        saveLesson: handleSaveLesson,
      }}
    >
      {children}
    </LessonContext.Provider>
  )
}

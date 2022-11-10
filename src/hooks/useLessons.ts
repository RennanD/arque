import { useContext } from 'react'
import { LessonContext, LessonContextData } from '../contexts/LessonContext'

export function useLessons(): LessonContextData {
  const context = useContext(LessonContext)

  return context
}

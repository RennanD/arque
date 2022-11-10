import { LessonProvider } from './contexts/LessonContext'
import { NewDoc } from './pages/NewDoc'

export function App() {
  return (
    <LessonProvider>
      <NewDoc />
    </LessonProvider>
  )
}

import { BrowserRouter } from 'react-router-dom'

import { LessonProvider } from './contexts/LessonContext'

import { Router } from './routes'

export function App() {
  return (
    <LessonProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </LessonProvider>
  )
}

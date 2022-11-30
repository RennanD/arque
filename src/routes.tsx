import { Route, Routes } from 'react-router-dom'
import { NewDoc } from './pages/NewDoc'
import { EditDoc } from './pages/EditDoc'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<NewDoc />} />
      <Route path="/edit/:slug" element={<EditDoc />} />
    </Routes>
  )
}

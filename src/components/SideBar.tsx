import { Export } from 'phosphor-react'
import { useLessons } from '../hooks/useLessons'
import { Button } from './Button'
import { DocItem } from './DocItem'

export function SideBar() {
  const { lessons, exportLessons } = useLessons()

  async function handleExportLessons() {
    await exportLessons()

    alert('Descrições copiadas para área de transferência')
  }

  return (
    <div className="flex flex-col shadow-sm h-screen w-80 overflow-y-auto bg-gray-600">
      <div className="h-20 flex items-center">
        <h1 className="text-4xl font-bold px-6">
          Arque <span className="text-green-700">.</span>
        </h1>
      </div>

      {lessons.length > 0 ? (
        <div className=" flex flex-col flex-1 border-r-[1px] shadow-sm border-gray-600">
          <ul className="px-6 mt-8 flex-1">
            {lessons.map((lesson) => (
              <DocItem key={lesson.slug}>{lesson.title}</DocItem>
            ))}
          </ul>

          <div className="h-20 flex items-center justify-center">
            <Button.Root onClick={handleExportLessons}>
              <Button.Title>Exportar Aulas</Button.Title>
              <Button.Icon>
                <Export />
              </Button.Icon>
            </Button.Root>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-300">
          Não há descrições de aulas cadastradas
        </p>
      )}
    </div>
  )
}

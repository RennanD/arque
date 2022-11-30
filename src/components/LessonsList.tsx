import * as Popover from '@radix-ui/react-popover'
import { ListBullets } from 'phosphor-react'

import { DocItem } from './DocItem'

import { useLessons } from '../hooks/useLessons'

import '../styles/dialog.css'

export function LessonsList() {
  const { lessons } = useLessons()

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          className="p-4 bg-gray-600 rounded-md "
          aria-label="Update dimensions"
        >
          <ListBullets size={22} />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="rounded-sm px-4 text-base bg-gray-500 w-96"
          sideOffset={5}
        >
          {lessons.length > 0 ? (
            <ul>
              {lessons.map((lesson) => (
                <DocItem
                  key={lesson.slug}
                  title={lesson.title}
                  slug={lesson.slug}
                />
              ))}
            </ul>
          ) : (
            <div className="flex flex-1 items-center justify-center h-20">
              <p className="text-gray-300">Não há aulas para listar</p>
            </div>
          )}

          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

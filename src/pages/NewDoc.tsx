import { useState } from 'react'
import {
  Article,
  ArticleMedium,
  Check,
  Export,
  GitBranch,
  XCircle,
} from 'phosphor-react'

import MDEditor from '@uiw/react-md-editor'

import slugify from 'slugify'

import { Button } from '../components/Button'
import { Label } from '../components/Label'
import { NavBar } from '../components/NavBar'
// import { SideBar } from '../components/SideBar'
import { useLessons } from '../hooks/useLessons'
import { LessonsList } from '../components/LessonsList'

export function NewDoc() {
  const [markdonw, setMarkdown] = useState('')
  const [title, setTitle] = useState('')
  const [commitLink, setCommitLink] = useState('')

  const { createLesson, changeCluster, cluster, exportLessons, clearLessons } =
    useLessons()

  function handleAddLesson() {
    if (!markdonw.trim() || !title.trim()) {
      alert('O título e a descrição são obrigatórios')
      return
    }
    const lessonSlug = slugify(title)

    try {
      createLesson({
        description: markdonw,
        slug: lessonSlug,
        title,
        commitLink,
      })

      setCommitLink('')
      setMarkdown('')
      setTitle('')
      alert('Aula adicionada com sucesso')
    } catch (error) {
      const isAppError = error instanceof Error

      alert(isAppError ? error.message : 'Não foi possível adicionar a aula')
    }
  }

  async function handleExportLessons() {
    if (!cluster.trim()) {
      alert('Digite um nome para o cluster')
      return
    }

    await exportLessons()

    alert('Descrições copiadas para área de transferência')
  }

  function handleClearLessons() {
    clearLessons()

    alert('Listagem de aulas, limpa com sucesso')
  }

  return (
    <div className="flex w-full min-h-screen flex-row overflow-hidden">
      {/* <SideBar /> */}
      <div className="w-full h-screen">
        <NavBar.Root>
          <NavBar.Title onChangeText={changeCluster}>{cluster}</NavBar.Title>

          <div className="w-40 flex justify-center gap-4 ml-6">
            <button className="p-4 bg-gray-600 rounded-md">
              <Export size={22} color="#00B37E" onClick={handleExportLessons} />
            </button>

            <LessonsList />

            <button className="p-4 bg-gray-600 rounded-md">
              <XCircle size={22} color="#ef4444" onClick={handleClearLessons} />
            </button>
          </div>
        </NavBar.Root>

        <div className="pb-10 max-h-[calc(100vh_-_80px)] w-full overflow-y-auto">
          <main className="w-full px-8 my-8 mx-auto max-w-[1080px]">
            <form action="">
              <Label.Root>
                <Label.Root>
                  <Label.Icon>
                    <Article size={22} />
                  </Label.Icon>
                  <Label.Text>Título da Aula *</Label.Text>
                </Label.Root>
              </Label.Root>
              <input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="mt-2 mb-8 w-full border-2 border-gray-600 rounded-sm px-4 text-base py-2.5 bg-gray-600 text-gray-100 placeholder-gray-300"
                placeholder="Digite o nome da aula"
              />

              <Label.Root>
                <Label.Root>
                  <Label.Icon>
                    <GitBranch size={22} />
                  </Label.Icon>
                  <Label.Text>Commit da aula</Label.Text>
                </Label.Root>
              </Label.Root>
              <input
                type="text"
                value={commitLink}
                onChange={(event) => setCommitLink(event.target.value)}
                className="mt-2 mb-8 w-full border-2 border-gray-600 rounded-sm px-4 text-base py-2.5 bg-gray-600 text-gray-100 placeholder-gray-300"
                placeholder="Link para o commit"
              />

              <Label.Root>
                <Label.Root>
                  <Label.Icon>
                    <ArticleMedium size={22} />
                  </Label.Icon>
                  <Label.Text>Descrição da Aula *</Label.Text>
                </Label.Root>
              </Label.Root>
              <MDEditor
                className="mt-2"
                value={markdonw}
                onChange={(value) => setMarkdown(value!)}
                tabSize={4}
                fullscreen={false}
                hideToolbar
                style={{
                  backgroundColor: '#202024',
                  color: '#E1E1E6',
                  fontSize: 24,
                }}
              />

              <div className="mt-8">
                <Button.Root full onClick={handleAddLesson}>
                  <Button.Icon>
                    <Check size={24} />
                  </Button.Icon>
                  <Button.Title>Adicionar</Button.Title>
                </Button.Root>
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  )
}

import { Article, ArticleMedium, Check, GitBranch } from 'phosphor-react'

import { useState } from 'react'
import MDEditor from '@uiw/react-md-editor'

import { Button } from '../components/Button'
import { Label } from '../components/Label'
import { NavBar } from '../components/NavBar'
import { SideBar } from '../components/SideBar'

export function NewDoc() {
  const [value, setValue] = useState('**Hello world!!!**')

  return (
    <div className="flex w-full min-h-screen flex-row">
      <SideBar />
      <div className="w-full h-screen">
        <NavBar.Root>
          <NavBar.Title>
            Descrições de aula - Módulo 4 React Native 2022
          </NavBar.Title>

          <div className="w-80 flex justify-end">
            <Button.Root>
              <Button.Icon>
                <Check size={24} />
              </Button.Icon>
              <Button.Title>Adicionar</Button.Title>
            </Button.Root>
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
                  <Label.Text>Título da Aula</Label.Text>
                </Label.Root>
              </Label.Root>
              <input
                type="text"
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
                className="mt-2 mb-8 w-full border-2 border-gray-600 rounded-sm px-4 text-base py-2.5 bg-gray-600 text-gray-100 placeholder-gray-300"
                placeholder="Link para o commit"
              />

              <Label.Root>
                <Label.Root>
                  <Label.Icon>
                    <ArticleMedium size={22} />
                  </Label.Icon>
                  <Label.Text>Descrição da Aula</Label.Text>
                </Label.Root>
              </Label.Root>
              <MDEditor
                className="mt-2"
                value={value}
                onChange={(value) => setValue(value!)}
                tabSize={4}
                fullscreen={false}
                // hideToolbar
                style={{
                  backgroundColor: '#202024',
                  color: '#E1E1E6',
                  fontSize: 16,
                }}
              />
            </form>
          </main>
        </div>
      </div>
    </div>
  )
}

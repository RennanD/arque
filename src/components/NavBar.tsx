import { ReactNode } from 'react'

interface NavBarRootProps {
  children?: ReactNode
}

function NavBarRoot({ children }: NavBarRootProps) {
  return (
    <nav className="w-full border-b-[1px] shadow-sm border-gray-600 h-20 mt-4 pb-4">
      <div className="h-full flex flex-1 items-center w-full px-8 mx-auto max-w-[1080px]">
        {children}
      </div>
    </nav>
  )
}

interface NavBarTitleProps {
  children: string
  onChangeText?: (value: string) => void
  readOnly?: boolean
}
function NavBarTitle({ children, onChangeText, readOnly }: NavBarTitleProps) {
  return (
    <div className="flex flex-1">
      <input
        type="text"
        value={children}
        readOnly={readOnly}
        className="text-xl w-full rounded-sm px-4 py-2.5 bg-gray-700 text-gray-100 placeholder-gray-300"
        placeholder="Digite o título do cluster"
        onChange={(e) => {
          if (onChangeText) {
            onChangeText(e.target.value)
          }
        }}
      />
    </div>
  )
}

export const NavBar = {
  Root: NavBarRoot,
  Title: NavBarTitle,
}

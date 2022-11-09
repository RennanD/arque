import { ReactNode } from 'react'

interface NavBarRootProps {
  children?: ReactNode
}

function NavBarRoot({ children }: NavBarRootProps) {
  return (
    <nav className="w-full border-b-[1px] shadow-sm border-gray-600 h-20">
      <div className="h-full flex flex-1 items-center w-full px-8 mx-auto max-w-[1080px]">
        {children}
      </div>
    </nav>
  )
}

interface NavBarTitleProps {
  children: string
}
function NavBarTitle({ children }: NavBarTitleProps) {
  return (
    <div className="flex flex-1">
      <p className="text-lg font-medium">{children}</p>
    </div>
  )
}

export const NavBar = {
  Root: NavBarRoot,
  Title: NavBarTitle,
}

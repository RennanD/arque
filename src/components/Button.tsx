import { ReactNode } from 'react'

interface ButtonRootProps {
  children: ReactNode
}

function ButtonRoot({ children }: ButtonRootProps) {
  return (
    <button
      className="flex items-center gap-2 bg-green-700 rounded-sm px-4 py-2"
      type="button"
    >
      {children}
    </button>
  )
}

interface ButtonTitleProps {
  children: string
}
function ButtonTitle({ children }: ButtonTitleProps) {
  return <p>{children}</p>
}

interface ButtonIconProps {
  children: ReactNode
}
function ButtonIcon({ children }: ButtonIconProps) {
  return <div>{children}</div>
}

export const Button = {
  Root: ButtonRoot,
  Title: ButtonTitle,
  Icon: ButtonIcon,
}

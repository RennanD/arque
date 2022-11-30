import { InputHTMLAttributes, ReactNode } from 'react'

interface ButtonRootProps extends InputHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  full?: boolean
}

function ButtonRoot({
  children,
  type = 'button',
  full = false,
  ...rest
}: ButtonRootProps) {
  return (
    <button
      className={`flex items-center gap-2 bg-green-700 rounded-md px-4 py-3 ${
        full ? 'w-full items-center justify-center' : ''
      }`}
      type={type}
      {...rest}
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

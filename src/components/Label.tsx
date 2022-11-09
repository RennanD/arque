import { InputHTMLAttributes, ReactNode } from 'react'

interface LabelRootProps extends InputHTMLAttributes<HTMLLabelElement> {
  children: ReactNode
}

function LabelRoot({ children, ...rest }: LabelRootProps) {
  return (
    <label {...rest} className="flex items-center gap-2">
      {children}
    </label>
  )
}

interface LabelTextProps {
  children: string
}

function LabelText({ children }: LabelTextProps) {
  return <p className="mt-1">{children}</p>
}

interface LabelIconProps {
  children: ReactNode
}
function LabelIcon({ children }: LabelIconProps) {
  return <div>{children}</div>
}

export const Label = {
  Root: LabelRoot,
  Text: LabelText,
  Icon: LabelIcon,
}

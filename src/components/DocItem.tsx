interface DocItemProps {
  children: string
}

export function DocItem({ children }: DocItemProps) {
  return (
    <li className="mb-6 font-medium">
      <p>{children}</p>
    </li>
  )
}

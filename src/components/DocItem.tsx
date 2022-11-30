import { Pencil } from 'phosphor-react'
import { Link } from 'react-router-dom'

interface DocItemProps {
  title: string
  slug: string
}

export function DocItem({ title, slug }: DocItemProps) {
  return (
    <li className="px-4 h-16 flex items-center justify-between border-t-[1px] border-gray-400 font-medium">
      <p>{title}</p>
      <Link to={`/edit/${slug}`} className="p-3">
        <Pencil />
      </Link>
    </li>
  )
}

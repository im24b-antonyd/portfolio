import { ReactNode } from 'react'

interface TechCardProps {
  name: string
  icon: ReactNode
}

export default function TechCard({ name, icon }: TechCardProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-3 text-gray-700 dark:text-gray-300">{icon}</div>
      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{name}</span>
    </div>
  )
}

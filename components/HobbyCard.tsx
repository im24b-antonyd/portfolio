import { ReactNode } from 'react'

interface HobbyCardProps {
  title: string
  icon: ReactNode
}

export default function HobbyCard({ title, icon }: HobbyCardProps) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-500 dark:bg-blue-900/30 dark:text-blue-400">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
    </div>
  )
}

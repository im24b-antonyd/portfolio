import Image from 'next/image'
import Link from 'next/link'

interface Project {
  id: string | number
  title: string
  description: string
  image?: string
  githubLink: string
  learnMoreLink: string
  tags: string[]
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-700">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-gray-400">
            No image
          </div>
        )}
      </div>

      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{project.title}</h3>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          aria-label="GitHub"
        >
          {/* Lucide GitHub Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </a>
      </div>

      <p className="mb-6 flex-grow text-sm text-gray-600 dark:text-gray-400">
        {project.description}
      </p>

      <div className="mb-6">
        <Link
          href={project.learnMoreLink}
          className="group inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Learn More
          {/* Lucide Arrow Right Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="mt-auto flex flex-wrap gap-2 border-t border-gray-100 pt-4 dark:border-gray-700">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-600 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

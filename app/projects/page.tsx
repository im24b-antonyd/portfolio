import Image from 'next/image'
import Link from 'next/link'
import PageTitle from '@/components/PageTitle'

const projects = [
  {
    id: 1,
    title: 'SBB-Lore',
    description: 'Lernen Sie die Welt der SBB kennen.',
    image: '/static/images/sbb.svg',
    githubLink: 'https://github.com/IM23a-braendlim/SBB_Lore',
    learnMoreLink: 'https://sbb-lore.vercel.app/',
    tags: ['Next.js', 'Tailwind', 'React'],
  },
]

export default function Projects() {
  return (
    <div className="py-12 md:py-16">
      <div className="mb-8 md:mb-12">
        <PageTitle>Projekte</PageTitle>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
          >
            {/* Image Container */}
            <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-700">
              {/* Fallback placeholder if no image */}
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
                  No image available
                </div>
              )}
            </div>

            {/* Title and GitHub Icon Row */}
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {project.title}
              </h2>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                aria-label={`GitHub repository for ${project.title}`}
              >
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
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            </div>

            {/* Description */}
            <p className="mb-6 flex-grow text-base text-gray-600 dark:text-gray-400">
              {project.description}
            </p>

            {/* Learn More Link */}
            <div className="mb-6">
              <Link
                href={project.learnMoreLink}
                className="group text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 inline-flex items-center text-sm font-medium"
              >
                Mehr erfahren
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1 transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Technology Tags */}
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
        ))}
      </div>
    </div>
  )
}

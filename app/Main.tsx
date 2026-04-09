import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import Image from '@/components/Image'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="flex flex-col-reverse items-center justify-between gap-8 pt-6 pb-8 md:flex-row">
          <div className="space-y-2 text-center md:space-y-5 md:text-left">
            <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
              Daniel Antony
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              {siteMetadata.description}
            </p>
          </div>
          <div className="w-64 flex-shrink-0 sm:w-80 md:w-[400px] lg:w-[500px]">
            <Image
              src="/static/images/daniel.png"
              alt="Daniel Antony"
              width={500}
              height={500}
              className="h-auto w-full rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}

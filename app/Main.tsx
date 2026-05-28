import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import Image from '@/components/Image'
import PageTitle from '@/components/PageTitle'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:items-center md:justify-between md:gap-12">
          {/* Text Content */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <PageTitle>Daniel Antony</PageTitle>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              {siteMetadata.description}
            </p>
          </div>

          {/* Profile Image */}
          <div className="w-full max-w-[240px] flex-shrink-0 md:max-w-[320px]">
            <Image
              src="/static/images/daniel.png"
              alt="Daniel"
              width={500}
              height={500}
              className="h-auto w-full rounded-2xl"
              priority
            />
          </div>
        </div>
      </section>

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

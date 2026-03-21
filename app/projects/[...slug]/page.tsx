import { allBlogs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'

// 1. Tell Next.js which pages to build
export const generateStaticParams = async () => {
  return allBlogs.map((p) => ({
    slug: p.slug.split('/'),
  }))
}

export default async function Page(props: { params: Promise<{ slug: string[] }> }) {
  const params = await props.params
  const slug = decodeURI(params.slug.join('/'))

  // 2. Find the specific project/blog data
  const post = allBlogs.find((p) => p.slug === slug)

  // 3. If it doesn't exist, show 404
  if (!post) {
    return notFound()
  }

  const mainContent = coreContent(post)

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl">
      <header className="pt-6 xl:pb-6">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          {post.title}
        </h1>
        {post.summary && (
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{post.summary}</p>
        )}
      </header>

      <div className="prose dark:prose-invert max-w-none pt-10 pb-8">
        {/* 4. This renders the actual markdown content */}
        <MDXLayoutRenderer code={post.body.code} />
      </div>
    </article>
  )
}

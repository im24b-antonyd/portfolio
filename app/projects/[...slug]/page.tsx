import { allBlogs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import PageTitle from '@/components/PageTitle'

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

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl">
      <header className="pt-6 xl:pb-6">
        <PageTitle>{post.title}</PageTitle>
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

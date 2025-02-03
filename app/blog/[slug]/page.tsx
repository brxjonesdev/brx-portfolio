import { promises as fs } from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import { CardHeader, CardTitle, CardDescription } from '@/components/shadcn/card'
import Test from '@/components/blog/embeds/test'
import { ArrowLeft, CalendarIcon, ClockIcon } from 'lucide-react'
import { Button } from '@/components/shadcn/button'
import Link from 'next/link'

const components = {
    Test,
    // Add other components here
  }

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), 'app/content/posts')
  const files = await fs.readdir(blogDir)

  
  return files
    .filter((file) => path.extname(file) === '.mdx')
    .map((file) => ({
      slug: file.replace('.mdx', ''),
    }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'app/content/posts', `${params.slug}.mdx`)
  
  try {
    const fileContent = await fs.readFile(filePath, 'utf8')
    const { content, frontmatter } = await compileMDX<{ title: string; date: string; subtitle: string; readingTime: string }>({
      source: fileContent,
      options: { parseFrontmatter: true },
      components,
    })

    return (
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-sans">
      <div className='flex justify-between items-end'>
      <CardHeader className="px-0 pb-0">
        <div className="space-y-2">
          <CardTitle className="text-3xl sm:text-4xl font-bold text-white">
            {frontmatter.title}
          </CardTitle>
          <CardDescription className="text-lg text-purple-100">
            {frontmatter.subtitle}
          </CardDescription>
        </div>
        <div className="flex items-center space-x-4 mt-4 text-purple-200 text-sm">
          <div className="flex items-center">
            <CalendarIcon className="w-4 h-4 mr-1" />
            <span>{frontmatter.date}</span>
          </div>
          <div className="flex items-center">
            <ClockIcon className="w-4 h-4 mr-1" />
            <span>{frontmatter.readingTime}</span>
          </div>
        </div>
      </CardHeader>
        <Link href="/blog">
        <Button className='mt-3' variant={"outline"}>Back To All Posts</Button>
        </Link>

      </div>
      <div className='h-1 w-full bg-fuchsia-600 my-4'></div>
      <div className="prose lg:prose-lg prose-invert max-w-none">
        {content}
      </div>
    </article>
    )
  } catch (error) {
    console.error('Error reading blog post:', error)
    return <div>Error: Unable to load blog post.</div>
  }
}
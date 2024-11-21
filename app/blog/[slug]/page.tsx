import { promises as fs } from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import { CardHeader, CardTitle, CardDescription } from '@/components/shadcn/card'
import Test from '@/components/blog/embeds/test'

const components = {
    Test,
    // Add other components here
  }

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), 'app/blog')
  const files = await fs.readdir(blogDir)

  
  return files
    .filter((file) => path.extname(file) === '.mdx')
    .map((file) => ({
      slug: file.replace('.mdx', ''),
    }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'app/blog', `${params.slug}.mdx`)
  
  try {
    const fileContent = await fs.readFile(filePath, 'utf8')
    const { content, frontmatter } = await compileMDX<{ title: string; date: string; subtitle: string }>({
      source: fileContent,
      options: { parseFrontmatter: true },
      components,
    })

    return (
      <article className="prose lg:prose-md font-sans text-black">
        <CardHeader className='p-0 pb-10'>
    <CardTitle>{frontmatter.title} <span className='text-xs font-sans'>/ {frontmatter.date}</span></CardTitle>
    <CardDescription>{frontmatter.subtitle}</CardDescription>
  </CardHeader>
        {content}
      </article>
    )
  } catch (error) {
    console.error('Error reading blog post:', error)
    return <div>Error: Unable to load blog post.</div>
  }
}
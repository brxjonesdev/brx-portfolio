import Link from 'next/link'
import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/shadcn/card"
  

export default async function Home() {
  const blogDir = path.join(process.cwd(), 'app/blog')
  const files = await fs.readdir(blogDir)
  
  const posts = await Promise.all(
    files
      .filter((file) => path.extname(file) === '.mdx')
      .map(async (file) => {
        const filePath = path.join(blogDir, file)
        const fileContent = await fs.readFile(filePath, 'utf8')
        const { data } = matter(fileContent)
        return {
          slug: file.replace('.mdx', ''),
          title: data.title || 'Untitled',
          subtitle: data.subtitle || 'No subtitle',
          date: data.date || 'No date',
        }
      })
  )

  return (
    <div className="max-w-5xl mx-auto py-2">
      <h1 className="text-3xl font-bold mb-6 font-sans">My Current Ramblings...</h1>
      {posts.length === 0 ? (
        <p>No blog posts found.</p>
      ) : (
        <div className="space-y-4">
          {posts
          .sort((a, b) => (a.date > b.date ? -1 : 1))
          .map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className='mx-1'>
                <Card className='hover:bg-white/10'>
                    <CardHeader>
                        <div className='flex justify-between'>
                            <CardTitle className='font-sans tracking-wider'>{post.title}</CardTitle>
                            <CardTitle className="text-sm text-gray-500">{post.date}</CardTitle>
                        </div>
                        <CardDescription className='font-sans'>{post.subtitle}</CardDescription>
                    </CardHeader>
                </Card>
            </Link>
          
          ))}
        </div>
      )}
    </div>
  )
}
import React from 'react'
import path from 'path'
import matter from 'gray-matter'
import { promises as fs } from 'fs'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/shadcn/card"
import Link from 'next/link'

  

  

export default async function BlogPosts({variant}: {variant : "showcase" | "all"}) {
     const blogDir = path.join(process.cwd(), 'app/content/posts')
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
              subtitle: data.blurb || 'No subtitle',
              date: data.date || 'No date',
              show: data.show || false,
            }
          })
      )
  return (
   <section className='flex flex-col space-y-4 overflow-y-scroll '>
    {posts
    .filter((post) => variant === "all" || post.show)
    .map((post, index) => {
        return (
            <Link href={`/blog/${post.slug}`} key={post.slug} className=''>
            <Card key={index} className='hover:bg-white/10 m-0 p-2'>
            <CardHeader className='p-3'>
              <CardTitle className='text-sm'>{post.title}</CardTitle>
              <CardDescription className='text-xs'>{post.subtitle}</CardDescription>
            </CardHeader>
          </Card>
            </Link>
          
        )
    })}
   
   </section>
  )
}

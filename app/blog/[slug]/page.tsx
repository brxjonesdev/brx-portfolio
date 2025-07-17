import { promises as fs } from "fs"
import path from "path"
import { compileMDX } from "next-mdx-remote/rsc"
import { CalendarIcon,  ArrowLeft } from "lucide-react"
import Link from "next/link"
import { CodeBlock } from "@/app/content/components/codeblock"

const components = {
  CodeBlock,
}

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), "app/content/posts")
  const files = await fs.readdir(blogDir)

  return files
    .filter((file) => path.extname(file) === ".mdx")
    .map((file) => ({
      slug: file.replace(".mdx", ""),
    }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), "app/content/posts", `${params.slug}.mdx`)

  try {
    const fileContent = await fs.readFile(filePath, "utf8")
    const { content, frontmatter } = await compileMDX<{
      title: string
      date: string
      subtitle: string
      readingTime: string
    }>({
      source: fileContent,
      options: { parseFrontmatter: true },
      components,
    })

    return (
      <div className="min-h-screen bg-black text-white text-sm font-sans">
        <article className="max-w-3xl mx-auto px-6 py-12">
          {/* Back to posts link */}
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Home
          </Link>

          {/* Header section */}
          <header className="mb-12 font-sans">
            <h1 className="text-xl md:text-4xl font-bold mb-6 leading-tight">{frontmatter.title}</h1>
            <p className="text-md text-gray-300 leading-relaxed mb-6">{frontmatter.subtitle}</p>
            <div className="flex items-center space-x-6 text-gray-400 text-xs">
              <div className="flex items-center">
                <CalendarIcon className="w-4 h-4 mr-2" />
                <span>
                  {new Date(frontmatter.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  })}
                </span>
              </div>
             
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-xs prose-invert max-w-none font-sans leading-7 ">{content}</div>
        </article>
      </div>
    )
  } catch (error) {
    console.error("Error reading blog post:", error, )
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center font-mono">
        <section>
          <h1 className="text-3xl font-bold mb-4">Something&apos;s up here.....</h1>
          <p className="text-lg text-gray-400">The blog post you are looking for does not exist.</p>
          <Link href="/blog" className="text-blue-500 hover:underline mt-4 inline-block">
            Go back to all posts
          </Link>
        </section>
      </div>
    )
  }
}

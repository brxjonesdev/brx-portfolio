import BlogPosts from "@/components/blog/blog";
import { Button } from "@/components/shadcn/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";


export default async function Home() {


  return (
    <div className="min-h-screen bg-background px-6 font-sans ">
      <section className="max-w-4xl mx-auto py-12 space-y-4">
        <div className="flex gap-2 items-center">
          <Link href="/">
          <Button size="icon" variant="ghost" className="text-white">
            <ArrowLeft/>
          </Button>
          </Link>
        <h3 className="text-xl font-bold text-white">All of my Posts.</h3>
        </div>
      <BlogPosts variant='all'/>
      </section>
    </div> 
   
  )
}
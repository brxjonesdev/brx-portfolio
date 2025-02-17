/* eslint-disable react/no-unescaped-entities */


import BlogPosts from '@/components/blog/blog';
import AboutMe from '@/components/layout/about-me-card';
import Backstory from '@/components/layout/backstory';
import Experience from '@/components/layout/experience';
import Projects from '@/components/layout/projects';
import { Button } from '@/components/shadcn/button';
import { Separator } from '@/components/shadcn/separator';
import Link from 'next/link';

export default function Component() {

  

  return (
    <div className="min-h-screen bg-background text-gray-300 font-mono px-6">
      <div className="grid lg:grid-cols-[400px_1fr] lg:gap-8 lg:max-w-5xl mx-auto">
        <div className="lg:h-screen lg:sticky lg:top-0 pb-6 pt-12 flex flex-col space-y-6 ">
          <AboutMe />
          <Separator/>
          <h2 className='text-lg font-semibold'>
            Blog Posts
          </h2>
          <BlogPosts variant='showcase'/>
       <div className='w-full flex justify-end'>
              <Link href='/blog' className=''>
              <Button variant='secondary' className=''>View All Posts</Button>
              </Link>
        </div>
        </div>
        <div className="pb-6 lg:pt-16 lg:space-y-24 space-y-12">
          <Backstory />
          <Experience />
          <Projects />
        </div>
      </div>
    </div>
  );
}

/* eslint-disable react/no-unescaped-entities */
import AboutMe from '@/components/layout/about-me-card';
import Backstory from '@/components/layout/backstory';
import Projects from '@/components/layout/projects';
import { Separator } from '@/components/shadcn/separator';

export default function Component() {

  

  return (
    <div className="min-h-screen bg-background text-gray-300 font-mono px-6">
      <div className="grid lg:grid-cols-[400px_1fr] lg:gap-8 lg:max-w-5xl mx-auto ">
        <div className="lg:h-screen lg:sticky lg:top-0 pb-6 pt-12 flex flex-col space-y-6 ">
          <AboutMe />
          <Separator/>
          {/* <h2 className='text-lg font-semibold'>
            Blog Posts
          </h2>
          <BlogPosts variant='showcase'/> */}
       {/* <div className='w-full flex justify-end'>
              <Link href='/blog' className=''>
              <Button variant='secondary' className=''>View All Posts</Button>
              </Link>
        </div> */}
        </div>
        <div className="pb-6 lg:pt-16 space-y-8">
          <Backstory />
          <Projects />
        </div>
      </div>
    </div>
  );
}

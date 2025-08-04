/* eslint-disable react/no-unescaped-entities */
import BlogPosts from '@/components/blog/blog';
import AboutMe from '@/components/layout/about-me-card';
import Backstory from '@/components/layout/backstory';
import Projects from '@/components/layout/projects';

export default function Component() {

  

  return (
    <div className="min-h-screen bg-background text-gray-300 font-mono px-6">
      <div className="grid lg:grid-cols-[400px_1fr] lg:gap-8 lg:max-w-5xl mx-auto ">
        <div className="lg:h-screen lg:sticky lg:top-0 pb-6 pt-12 flex flex-col space-y-6 ">
          <AboutMe />
          {/* <div>
            <div className='px-2'>
              <p className="text-sm text-muted-foreground">
                Here's what I've been working on.
              </p>
            </div>
          <BlogPosts/>
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

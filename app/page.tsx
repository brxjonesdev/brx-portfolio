/* eslint-disable react/no-unescaped-entities */
'use client';

import AboutMe from '@/components/layout/about-me-card';
import Backstory from '@/components/layout/backstory';
import Experience from '@/components/layout/experience';
import Projects from '@/components/layout/projects';
import { Button } from '@/components/shadcn/button';
import Link from 'next/link';

export default function Component() {
  const scrollToSection = (sectionId: string, offset: number = 50) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementTop - offset,
        behavior: 'smooth',
      });
    }
  };
  

  return (
    <div className="min-h-screen bg-background text-gray-300 font-mono px-6">
      <div className="grid lg:grid-cols-[400px_1fr] lg:gap-8 lg:max-w-5xl mx-auto">
        <div className="lg:h-screen lg:sticky lg:top-0 pb-6 pt-12 flex flex-col space-y-6 ">
          <AboutMe />
          <nav className="space-y-4  lg:flex flex-col justify-end items-end lg:border-r-2 lg:pr-4 border-cyan-400/30">
                <Button 
                  onClick={() => scrollToSection('about')}
                 variant={"ghost"}
                >
                  ABOUT
                </Button>
                <Button 
                  onClick={() => scrollToSection('experience')}
                  variant={"ghost"}
                >
                  EXPERIENCE
                </Button>
                <Button 
                  onClick={() => scrollToSection('projects')}
                 variant={"ghost"}
                >
                  PROJECTS
                </Button>
          </nav>
          <div className='text-right text-sm w-fit  pt-4'>
            <p>
              I'm currently working on a new project called <span className='font-bold'>Loop</span>, a collaborative way to plan and organize events.
            </p>
            <Link href="/projects/loop" className='underline text-cyan-400 font-semibold underline-offset-2'>
            See more about Loop
            </Link>
          </div>
        </div>
        <div className="pb-6 pt-16 lg:space-y-36 space-y-12">
          <Backstory />
          <Experience />
          <Projects />
        </div>
      </div>
    </div>
  );
}

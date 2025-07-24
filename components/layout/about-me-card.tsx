import React from 'react';
import {
  Card,
  CardDescription,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/shadcn/card';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/shadcn/avatar';
import profileImage from '@/public/blusuede.png';
import Link from 'next/link';
import { Github, Linkedin, FileUser } from 'lucide-react';
import { Separator } from '../shadcn/separator';
import { Typewriter } from './typewriter';

export default function AboutMe() {
  return (
    <Card className="w-full ">
      <CardHeader className="flex flex-row items-center gap-4">
        <div>
          <Avatar className="w-12 h-12">
          <AvatarImage src={profileImage.src} className='hover:animate-spin' />
            <AvatarFallback>B</AvatarFallback>
          </Avatar>
        </div>
        <div className="space-y-1">
          <CardTitle className="space-y-1 sm:flex items-center sm:space-y-0">
            Braxton Jones
          </CardTitle>
          <CardDescription className="text-xs md:text-sm lg:text-md">
          <Typewriter />

          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className='space-y-4' >
      <div className='flex gap-6 ml-auto w-full justify-end'>
        <h2 className='text-sm text-muted-foreground'>All my Links {'->'}</h2>
        <div className="flex gap-4 text-gray-400">
          <Link href="https://github.com/brxjonesdev" className="hover:text-cyan-400 transition-colors">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/brxjonesdev/" className="hover:text-cyan-400 transition-colors">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          
            <a href={`/BraxtonJones_Resume.pdf`} download="braxton-jones-developer-resume.pdf" className="hover:text-cyan-400 transition-colors">
        <FileUser className="h-5 w-5" />
  <span className="sr-only">Download Resume</span>
</a>

        </div>
        </div>
        <Separator/>
        <div className='text-right'>
          <p className='text-sm'>
            Currently building <Link href="https://github.com/brxjonesdev/soapbox" className='text-cyan-400 font-semibold hover:text-cyan-200'>Soapbox</Link> & learning audio development on <Link href="https://www.ableton.com/en/" className='text-cyan-400 font-semibold hover:text-cyan-200'>Aerwyrm</Link>.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

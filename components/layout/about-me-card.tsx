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
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import { Github, Linkedin, FileUser } from 'lucide-react';

export default function AboutMe() {
  return (
    <Card className="w-full ">
      <CardHeader className="flex flex-row items-center gap-4">
        <div>
          <Avatar className="w-12 h-12">
            <AvatarImage src={profileImage.src} />
            <AvatarFallback>B</AvatarFallback>
          </Avatar>
        </div>
        <div className="space-y-1">
          <CardTitle className="space-y-1 sm:flex items-center sm:space-y-0">
            Braxton Jones
          </CardTitle>
          <CardDescription className="text-xs md:text-sm lg:text-md">
          <Typewriter
  options={{
    strings: [
      'Web Developer', 
      'Creative Thinker', 
      'Problem Solver', 
      'Tech Enthusiast', 
      'Software Developer'
    ],
    autoStart: true,
    loop: true,

  }}
/>

          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className=" flex justify-between items-center">
        <h2 className='text-sm text-muted-foreground'>All my Links {'->'}</h2>
        <div className="flex gap-4 text-gray-400">
          <Link href="#" className="hover:text-cyan-400 transition-colors">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="#" className="hover:text-cyan-400 transition-colors">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="#" className="hover:text-cyan-400 transition-colors">
            <FileUser className="h-5 w-5" />
            <span className="sr-only">Resume</span>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
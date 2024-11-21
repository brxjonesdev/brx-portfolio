'use client'
import React from 'react';
import {
  Card,
  CardDescription,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/shadcn/card';
import { usePathname } from 'next/navigation'

import profileImage from '@/public/blusuede.png';

import Link from 'next/link';

export default function AboutBlogMe() {
  const pathname = usePathname()
  console.log(pathname    
  )
  return (<>
    <Card className="w-full max-h-[400px]">
      <CardHeader className="flex flex-row items-center gap-4 pb-3">
        <div>
          <div className="w-12 h-12 bg-gradient-to-r from-purple-800 to-pink-700  rounded-3xl">
            
          </div>
        </div>
        <div className="space-y-1">
          <CardTitle className="space-y-1 sm:flex items-center sm:space-y-0">
            Braxton Jones
          </CardTitle>
          <CardDescription className="text-xs md:text-sm lg:text-md">
            My Thoughts and Experiences
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className=" flex justify-between items-center">
        <h2 className='text-sm text-muted-foreground text-black'>Back To My Portfolio {'->'}</h2>
        <div className="flex gap-4 text-gray-400">
          <Link href="/"
            className="w-8 h-8 bg-cover bg-center rounded-full transition-all duration-300 hover:animate-spin cursor-pointer"
            style={{ backgroundImage: `url(${profileImage.src})` }}
          ></Link>
        </div>
      </CardContent>
    </Card>
    <div>
      {pathname && pathname === '/blog' ? (
      null
      ) : (
      <div className="text-right text-sm text-muted-foreground">
        <Link href={"/blog"}>{`<-`}` All Posts</Link>
      </div>
      )}
    </div>
  </>);
}

/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";



export type Project = {
  src: string;
  title: string;
  description: string;
  ctaLink: string;
  codeLink?: string;
};

import { useOutsideClick } from "@/app/hooks/use-outside-click";

export function ProjectsExpand({projects}: {projects: Project[]}) {
  const [active, setActive] = useState<(typeof projects)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));





  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100] bg-black/25 backdrop-blur-sm">
      <motion.button
        key={`button-${active.title}-${id}`}
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.05 } }}
        className="absolute top-4 right-4 flex items-center justify-center bg-white/90 dark:bg-neutral-800/90 rounded-full h-8 w-8 shadow-md"
        onClick={() => setActive(null)}
      >
        X
    
      </motion.button>

      <motion.div
        layoutId={`card-${active.title}-${id}`}
        ref={ref}
        className="w-full max-w-[400px] h-[625px] overflow-y-scroll md:h-auto md:max-h-[90%] flex flex-col bg-[#0f0f0f] rounded-2xl overflow-hidden shadow-xl"
      >
        <motion.div layoutId={`image-${active.title}-${id}`}>
  <div className="w-[600px] h-32 overflow-hidden border-none rounded bg-cyan-400">
 
</div>
</motion.div>


        <div className="p-6 flex flex-col gap-4">
          <div>
            <motion.h3
              layoutId={`title-${active.title}-${id}`}
              className="text-lg font-bold text-neutral-800 dark:text-neutral-100"
            >
              {active.title}
            </motion.h3>
            <motion.p
              layoutId={`description-${active.description}-${id}`}
              className="text-neutral-600 dark:text-neutral-400 mt-1 text-sm font-sans"
            >
              {active.description}
            </motion.p>
          </div>

      

          <div className="flex gap-3 mt-2">
            {active.ctaLink && (
              <a
                href={active.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-neutral-800 dark:bg-neutral-700 text-white text-sm rounded-md hover:bg-neutral-700 dark:hover:bg-neutral-600 transition-colors"
              >
                View Live
              </a>
            )}
            {active.codeLink && (
              <a
                href={active.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-sm rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
              >
                View Code
              </a>
            )}
          </div>

          {/* {active.blogLinks && active.blogLinks.length > 0 && (
            <div className="mt-2">
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Related Articles:</p>
              <ul className="mt-1 space-y-1">
                {active.blogLinks.map((blog, index) => (
                  <li key={index}>
                    <a
                      href={blog.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {blog.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )} */}
        </div>
      </motion.div>
    </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4 flex flex-col">
        {projects.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className=" p-3 hover:rounded-xl hover:cursor-pointer hover:bg-cyan-400/30 max-w-[600px] border-l rounded-none "
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`} className="flex-1">
          <img
            src={card.src || "/placeholder.svg"}
            alt={card.title}
            className="object-cover object-center bg-white/10 rounded-lg h-[100px] max-w-[5rem]"
          />
              </motion.div>
              <div className="space-y-2">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-bold tracking-wider"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-sm font-sans"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
         
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};



/* eslint-disable @next/next/no-img-element */
"use client"

import { useEffect, useId, useRef, useState } from "react"
import { AnimatePresence, motion } from "motion/react" // Assuming motion/react is Framer Motion

export type Project = {
  src: string
  title: string
  description: string
  ctaLink?: string
  codeLink?: string
  hiatus?: boolean
  inProgress?: boolean
}

import { useOutsideClick } from "@/app/hooks/use-outside-click"
import { Badge } from "./badge"

export function ProjectsExpand({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof projects)[number] | boolean | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const id = useId()

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false)
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [active])

  useOutsideClick(ref, () => setActive(null))

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
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[400px]  overflow-y-scroll md:h-auto max-h-[90%] flex flex-col bg-[#0f0f0f] rounded-2xl overflow-hidden shadow-xl"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  src={active.src || "/placeholder.svg"}
                  alt={active.title}
                  className="object-cover object-center bg-white/10 rounded-lg h-[200px] w-full hidden lg:block"
                />
              </motion.div>

              <div className="p-6 flex flex-col gap-4">
                <div>
                  <motion.h3
                    layoutId={`title-${active.title}-${id}`}
                    className="text-lg font-bold text-neutral-800 dark:text-neutral-100 flex items-center gap-2"
                  >
                    {active.title}
                    {active.hiatus && <span className="text-sm font-normal text-red-500">(On Hiatus)</span>}
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
                      className={`px-4 py-2 text-white text-sm rounded-md transition-colors ${
                        active.hiatus
                          ? "bg-red-500 hover:bg-red-600 cursor-not-allowed"
                          : "bg-cyan-500 hover:bg-cyan-600"
                      }`}
                      aria-disabled={active.hiatus}
                      onClick={(e) => active.hiatus && e.preventDefault()}
                    >
                      {active.hiatus ? "On Hiatus" : "View Live"}
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
            className={`p-3 hover:rounded-xl hover:cursor-pointer max-w-[600px] border-l rounded-none "border-cyan-400 hover:bg-cyan-400/30`}
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`} className="flex-1 flex flex-col gap-1">
                {card.inProgress && <Badge className="text-center items-center justify-center">In Progress</Badge>}
                <img
                  src={card.src || "/placeholder.svg"}
                  alt={card.title}
                  className="object-cover object-center bg-white/10 rounded-lg h-[80px] min-w-[10rem] hidden lg:block"
                />
              </motion.div>
              <div className="space-y-2">
                
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-bold tracking-wider flex items-center gap-2"
                >
                  {card.title}
                </motion.h3>
                <motion.p layoutId={`description-${card.description}-${id}`} className="text-sm font-sans">
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  )
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
  )
}

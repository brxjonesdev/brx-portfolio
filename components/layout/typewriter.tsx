"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const words = [
    "Web Developer",
    "Software Engineer",
    "Tech Enthusiast",
    "Problem Solver",
    "ReVeluv",
]

export const Typewriter = () => {
  const [currentWord, setCurrentWord] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting && currentWord === words[currentIndex]) {
          // Word is complete, wait before deleting
          setTimeout(() => setIsDeleting(true), 1000)
          return
        }

        if (isDeleting && currentWord === "") {
          // Word is fully deleted, move to next word
          setIsDeleting(false)
          setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
          return
        }

        const nextWord = isDeleting
          ? words[currentIndex].substring(0, currentWord.length - 1)
          : words[currentIndex].substring(0, currentWord.length + 1)

        setCurrentWord(nextWord)
      },
      isDeleting ? 50 : 150,
    )

    return () => clearTimeout(timeout)
  }, [currentWord, currentIndex, isDeleting])

  return (
    <div className=" ">
      <motion.span key={currentWord} initial={{ opacity: .75 }} animate={{ opacity: 1 }} transition={{ duration: 0.1 }}>
        {currentWord}
      </motion.span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="ml-1 inline-block w-[2px] h-[1em] bg-primary"
      />
    </div>
  )
}


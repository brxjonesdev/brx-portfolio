"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/shadcn/button"

interface CodeBlockProps {
  children: string
  language?: string
  filename?: string
}

export function CodeBlock({ children, language = "text", filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group my-6">
      {filename && (
        <div className="flex items-center justify-between bg-cyan-800 text-cyan-300 px-4 py-2 text-sm font-mono rounded-t-lg border-b border-cyan-700">
          <span>{filename}</span>
          <span className="text-xs text-cyan-500 uppercase">{language}</span>
        </div>
      )}
      <div className="relative">
        <pre
          className={`bg-cyan-900 text-cyan-100 p-4 overflow-x-auto ${filename ? "rounded-t-none" : "rounded-lg"} rounded-b-lg`}
        >
          <code className={`language-${language} text-sm`}>{children}</code>
        </pre>
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-cyan-800 hover:bg-cyan-700 text-cyan-300"
          onClick={copyToClipboard}
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  )
}

interface InlineCodeProps {
  children: string
}

export function InlineCode({ children }: InlineCodeProps) {
  return (
    <code className="bg-cyan-100 dark:bg-cyan-800 text-cyan-800 dark:text-cyan-200 px-1.5 py-0.5 rounded text-sm font-mono">
      {children}
    </code>
  )
}

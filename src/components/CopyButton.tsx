import { Check, Copy } from 'lucide-react'
import { useState } from 'react'

interface CopyButtonProps {
  value: string
}

export function CopyButton({ value }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(value)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1400)
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#BDE0FE]/50 text-[#2B2D42] transition hover:bg-[#A8DADC]/60 focus:outline-none focus:ring-2 focus:ring-[#2B2D42]/20"
      aria-label={`Copy ${value}`}
      title={copied ? 'Copied' : 'Copy'}
    >
      {copied ? <Check size={17} /> : <Copy size={17} />}
    </button>
  )
}

import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { blogPosts } from '../data/portfolio'

export default function BlogDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const post = blogPosts.find((p) => p.slug === slug)

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#FAF8F5]">
        <div className="text-center">
          <p className="font-display text-2xl text-[#1A1A1A]">Post not found</p>
          <button type="button" onClick={() => navigate('/')} className="mt-4 text-[#7B2D3E] underline hover:text-[#8B3A4B] transition-colors">
            Go back home
          </button>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <div className="mx-auto max-w-4xl px-6 pt-32 pb-8">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-sm text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors mb-8"
        >
          <ArrowLeft size={16} /> Back
        </button>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-center text-center"
        >
          <div className="w-20 h-20 rounded-full bg-[#E8EDE3] flex items-center justify-center shadow-sm">
            <span className="font-display text-3xl font-bold text-[#7B2D3E]">{post.icon}</span>
          </div>
          <span className="mt-5 font-mono text-xs text-[#C9A84C]">{post.date}</span>
          <h1 className="mt-3 font-display text-4xl font-bold text-[#1A1A1A] sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-7 text-[#4A4A4A] max-w-2xl">{post.excerpt}</p>
        </motion.div>
      </div>
      <div className="mx-auto max-w-3xl px-6 pb-24">
        <div className="rounded-2xl border border-[#E8EDE3] bg-white p-8 shadow-xl">
          <p className="text-base leading-8 text-[#4A4A4A]">
            This article is coming soon. I believe in sharing what I learn, and I'm currently
            writing a detailed walkthrough of this project &mdash; including code snippets,
            architecture decisions, and lessons learned along the way.
          </p>
          <p className="text-base leading-8 text-[#4A4A4A] mt-4">
            In the meantime, feel free to explore my other projects or reach out if you'd like
            to discuss this topic.
          </p>
        </div>
      </div>
    </main>
  )
}

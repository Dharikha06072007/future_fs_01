import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { blogPosts } from '../data/portfolio'

function BlogCard({ post, index }: { post: typeof blogPosts[0]; index: number }) {
  const navigate = useNavigate()

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={() => navigate(`/blog/${post.slug}`)}
      className="group cursor-pointer rounded-2xl border border-[#E8EDE3] bg-white shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden"
    >
      <div className="bg-gradient-to-br from-[#E8EDE3] to-[#F5E6E0] px-6 pt-8 pb-6">
        <span className="font-display text-6xl font-bold leading-none text-[#7B2D3E]/30">
          {post.icon}
        </span>
      </div>
      <div className="p-6">
        <span className="font-mono text-[10px] font-medium uppercase tracking-widest text-[#C9A84C]">
          {post.date}
        </span>
        <h3 className="mt-2 font-display text-lg font-bold text-[#1A1A1A] group-hover:text-[#7B2D3E] transition-colors duration-300">
          {post.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-[#4A4A4A] line-clamp-3">
          {post.excerpt}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#7B2D3E] group-hover:gap-2.5 transition-all duration-300">
          Read more <ArrowRight size={14} />
        </span>
      </div>
    </motion.article>
  )
}

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 px-5 sm:px-8 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-[#C9A84C]">Writings</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-[#1A1A1A] sm:text-5xl">Thoughts on building, learning, and creating.</h2>
          <div className="mx-auto mt-4 h-[2px] w-16 bg-[#C9A84C] rounded-full" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { BlogPostCard } from './blog-post-card'
import { BlogPostForm } from './blog-post-form'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  slug: string
  readTime: string
}

interface BlogPostGridProps {
  posts: BlogPost[]
  onEdit: (post: BlogPost) => void
  onDelete: (id: string) => void
}

export function BlogPostGrid({ posts, onEdit, onDelete }: BlogPostGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <BlogPostCard
            post={post}
            onEdit={() => (
              <BlogPostForm
                post={post}
                onSubmit={(updatedPost) => onEdit(updatedPost)}
              />
            )}
            onDelete={() => onDelete(post.id)}
          />
        </motion.div>
      ))}
    </div>
  )
}


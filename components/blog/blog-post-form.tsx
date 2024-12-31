import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

interface BlogPost {
  id?: string
  title: string
  excerpt: string
  content: string
  date: string
  slug: string
  readTime: string
}

interface BlogPostFormProps {
  post?: BlogPost
  onSubmit: (post: BlogPost) => void
}

export function BlogPostForm({ post, onSubmit }: BlogPostFormProps) {
  const [formData, setFormData] = useState<BlogPost>(
    post || {
      title: '',
      excerpt: '',
      content: '',
      date: new Date().toISOString().split('T')[0],
      slug: '',
      readTime: '',
    }
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const currentDate = new Date().toISOString()
    onSubmit({ ...formData, date: currentDate })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{post ? 'Edit Post' : 'Add New Post'}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{post ? 'Edit Blog Post' : 'Add New Blog Post'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <Input
            name="slug"
            placeholder="Slug"
            value={formData.slug}
            onChange={handleChange}
            required
          />
          <Textarea
            name="excerpt"
            placeholder="Excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            required
          />
          <Textarea
            name="content"
            placeholder="Content"
            value={formData.content}
            onChange={handleChange}
            required
          />
          <Input
            name="readTime"
            placeholder="Read Time (e.g., 5 min read)"
            value={formData.readTime}
            onChange={handleChange}
            required
          />
          <Button type="submit">{post ? 'Update Post' : 'Add Post'}</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}


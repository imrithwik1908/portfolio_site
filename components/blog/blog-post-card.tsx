import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { CalendarIcon, Clock, Edit, Trash } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  slug: string
  readTime: string
}

interface BlogPostCardProps {
  post: BlogPost
  onEdit: (id: string) => void
  onDelete: (id: string) => void
}

export function BlogPostCard({ post, onEdit, onDelete }: BlogPostCardProps) {
  return (
    <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg">
      <CardContent className="flex-grow p-6">
        <h3 className="text-xl font-semibold mb-2">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h3>
        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between items-center text-sm text-muted-foreground">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <CalendarIcon className="mr-2 h-4 w-4" />
            <time>{post.date}</time>
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon" onClick={() => onEdit(post.id)}>
            <Edit className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => onDelete(post.id)}>
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}


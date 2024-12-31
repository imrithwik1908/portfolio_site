'use client'

import { useState, useEffect } from 'react'
import { BlogPostGrid } from '@/components/blog/blog-post-grid'
import { BlogPostForm } from '@/components/blog/blog-post-form'
import { Button } from '@/components/ui/button'
import { useToast } from "@/components/ui/use-toast"

export const metadata = {
  title: 'Blog | C Sai Rithwik Reddy',
  description: 'Thoughts on AI, Machine Learning, and Backend Development',
}

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState([])
  const { toast } = useToast()

  useEffect(() => {
    fetchBlogPosts()
  }, [])

  const fetchBlogPosts = async () => {
    try {
      const response = await fetch('/api/blog')
      if (!response.ok) throw new Error('Failed to fetch blog posts')
      const data = await response.json()
      setBlogPosts(data)
    } catch (error) {
      console.error('Error fetching blog posts:', error)
      toast({
        title: "Error",
        description: "Failed to fetch blog posts. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleAddPost = async (newPost) => {
    try {
      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      })
      if (!response.ok) throw new Error('Failed to add blog post')
      const addedPost = await response.json()
      setBlogPosts([...blogPosts, addedPost])
      toast({
        title: "Success",
        description: "Blog post added successfully!",
      })
    } catch (error) {
      console.error('Error adding blog post:', error)
      toast({
        title: "Error",
        description: "Failed to add blog post. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleEditPost = async (updatedPost) => {
    try {
      const response = await fetch(`/api/blog/${updatedPost.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPost),
      })
      if (!response.ok) throw new Error('Failed to update blog post')
      const editedPost = await response.json()
      setBlogPosts(blogPosts.map(post => post.id === editedPost.id ? editedPost : post))
      toast({
        title: "Success",
        description: "Blog post updated successfully!",
      })
    } catch (error) {
      console.error('Error updating blog post:', error)
      toast({
        title: "Error",
        description: "Failed to update blog post. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleDeletePost = async (id) => {
    try {
      const response = await fetch(`/api/blog/${id}`, {
        method: 'DELETE',
      })
      if (!response.ok) throw new Error('Failed to delete blog post')
      setBlogPosts(blogPosts.filter(post => post.id !== id))
      toast({
        title: "Success",
        description: "Blog post deleted successfully!",
      })
    } catch (error) {
      console.error('Error deleting blog post:', error)
      toast({
        title: "Error",
        description: "Failed to delete blog post. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto max-w-5xl px-4 py-16">
      <h1 className="mb-8 text-3xl font-bold text-center">Blog</h1>
      <div className="mb-8 flex justify-end">
        <BlogPostForm onSubmit={handleAddPost} />
      </div>
      <BlogPostGrid
        posts={blogPosts}
        onEdit={handleEditPost}
        onDelete={handleDeletePost}
      />
    </div>
  )
}


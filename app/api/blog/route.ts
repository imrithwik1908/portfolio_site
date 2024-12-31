import { NextResponse } from 'next/server'

let posts = [
  {
    id: '1',
    title: 'Getting Started with Next.js',
    content: 'Next.js is a powerful React framework...',
    excerpt: 'Learn the basics of Next.js and how to get started.',
    slug: 'getting-started-with-nextjs',
    readTime: '5 min read',
    createdAt: new Date().toISOString(),
  },
  // Add more initial posts here
]

export async function GET() {
  return NextResponse.json(posts)
}

export async function POST(request: Request) {
  const body = await request.json()
  const newPost = {
    id: Date.now().toString(),
    ...body,
    createdAt: new Date().toISOString(),
  }
  posts.push(newPost)
  return NextResponse.json(newPost)
}


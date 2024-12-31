import { NextResponse } from 'next/server'

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const { id } = params
  const body = await request.json()
  const index = posts.findIndex(post => post.id === id)
  if (index !== -1) {
    posts[index] = { ...posts[index], ...body }
    return NextResponse.json(posts[index])
  }
  return NextResponse.json({ error: 'Post not found' }, { status: 404 })
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const { id } = params
  const index = posts.findIndex(post => post.id === id)
  if (index !== -1) {
    const deletedPost = posts.splice(index, 1)[0]
    return NextResponse.json(deletedPost)
  }
  return NextResponse.json({ error: 'Post not found' }, { status: 404 })
}


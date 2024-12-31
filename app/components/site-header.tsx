'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ModeToggle } from './mode-toggle'

const navigation = [
  { name: 'home', href: '/' },
  { name: 'blog', href: '/blog' },
  { name: 'projects', href: '/projects' },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="container mx-auto flex h-16 max-w-3xl items-center justify-between px-8">
        <nav className="flex gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'text-sm transition-colors hover:text-foreground/80',
                pathname === item.href
                  ? 'text-foreground'
                  : 'text-foreground/60'
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <ModeToggle />
      </div>
    </header>
  )
}


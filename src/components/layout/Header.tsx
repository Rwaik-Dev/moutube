import { SearchIcon } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

import { Logo } from '@/assets/Logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Header() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') ?? '')

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const trimmed = query.trim()
    if (!trimmed) return
    navigate(`/search?q=${encodeURIComponent(trimmed)}`)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-4 px-4 py-3 md:px-6">
        <Link to="/" className="shrink-0 transition-opacity hover:opacity-90">
          <Logo height={36} />
        </Link>

        <form
          onSubmit={onSubmit}
          className="ml-auto flex w-full max-w-xl items-center gap-2"
          role="search"
        >
          <div className="relative w-full">
            <SearchIcon className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar jogos na RAWG..."
              className="h-9 bg-card/60 pl-8"
              aria-label="Buscar jogos"
            />
          </div>
          <Button type="submit" size="sm" className="hidden sm:inline-flex">
            Buscar
          </Button>
        </form>
      </div>
    </header>
  )
}

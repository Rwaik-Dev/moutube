import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/60">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-6">
        <p>
          MouTube v2 — catálogo alimentado pela{' '}
          <a
            href="https://rawg.io/apidocs"
            target="_blank"
            rel="noreferrer"
            className="text-primary underline-offset-4 hover:underline"
          >
            RAWG API
          </a>
        </p>
        <div className="flex items-center gap-4">
          <Link to="/" className="hover:text-foreground">
            Início
          </Link>
          <Link to="/search" className="hover:text-foreground">
            Busca
          </Link>
        </div>
      </div>
    </footer>
  )
}

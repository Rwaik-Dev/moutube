import { motion } from 'motion/react'
import { ArrowRightIcon, StarIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import type { RawgGame } from '@/lib/rawg/types'

type GameHeroProps = {
  game?: RawgGame
  isLoading?: boolean
}

export function GameHero({ game, isLoading }: GameHeroProps) {
  if (isLoading || !game) {
    return (
      <section className="relative min-h-[70vh] w-full overflow-hidden">
        <Skeleton className="absolute inset-0 rounded-none" />
        <div className="relative z-10 mx-auto flex min-h-[70vh] w-full max-w-7xl flex-col justify-end gap-4 px-4 py-16 md:px-6">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-6 w-96 max-w-full" />
          <Skeleton className="h-10 w-40" />
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden">
      {game.background_image ? (
        <img
          src={game.background_image}
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[70vh] w-full max-w-7xl flex-col justify-end px-4 py-16 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="flex max-w-2xl flex-col gap-4"
        >
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="bg-primary text-primary-foreground">Destaque</Badge>
            {game.genres?.slice(0, 2).map((g) => (
              <Badge key={g.id} variant="secondary">
                {g.name}
              </Badge>
            ))}
          </div>

          <h1 className="font-heading text-4xl font-extrabold tracking-tight md:text-6xl">
            MouTube
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Descubra {game.name} e milhares de títulos no catálogo RAWG.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1 text-primary">
              <StarIcon className="size-4 fill-primary" />
              {game.rating.toFixed(1)}
            </span>
            <span>{game.released ?? 'Data a definir'}</span>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <Button render={<Link to={`/game/${game.id}`} />} size="lg">
              Ver detalhes
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
            <Button
              render={<Link to="/search" />}
              variant="outline"
              size="lg"
            >
              Explorar busca
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

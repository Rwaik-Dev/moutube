import { motion } from 'motion/react'
import { StarIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Badge } from '@/components/ui/badge'
import type { RawgGame } from '@/lib/rawg/types'

type GameCardProps = {
  game: RawgGame
  index?: number
}

export function GameCard({ game, index = 0 }: GameCardProps) {
  const genre = game.genres?.[0]?.name

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.35) }}
    >
      <Link
        to={`/game/${game.id}`}
        className="group block overflow-hidden rounded-xl border border-border/70 bg-card/70 transition-transform duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_12px_40px_-20px_rgb(1_195_141_/_0.55)]"
      >
        <div className="relative aspect-video overflow-hidden bg-muted">
          {game.background_image ? (
            <img
              src={game.background_image}
              alt=""
              loading="lazy"
              className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex size-full items-center justify-center text-sm text-muted-foreground">
              Sem imagem
            </div>
          )}
          {genre ? (
            <Badge className="absolute top-2 left-2 bg-background/80 text-foreground backdrop-blur">
              {genre}
            </Badge>
          ) : null}
        </div>
        <div className="flex flex-col gap-2 p-3">
          <h3 className="line-clamp-2 font-heading text-base font-semibold leading-snug">
            {game.name}
          </h3>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{game.released ? game.released.slice(0, 4) : 'TBA'}</span>
            <span className="inline-flex items-center gap-1 text-primary">
              <StarIcon className="size-3.5 fill-primary" />
              {game.rating?.toFixed(1) ?? '—'}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

import type { ReactNode } from 'react'

import { GameCard } from '@/components/games/GameCard'
import { GameCardSkeleton } from '@/components/games/GameCardSkeleton'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import type { RawgGame } from '@/lib/rawg/types'

type GameSectionProps = {
  title: string
  description?: string
  games?: RawgGame[]
  isLoading?: boolean
  isError?: boolean
  action?: ReactNode
}

export function GameSection({
  title,
  description,
  games = [],
  isLoading,
  isError,
  action,
}: GameSectionProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 md:px-6">
      <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="font-heading text-2xl font-bold md:text-3xl">{title}</h2>
          {description ? (
            <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
              {description}
            </p>
          ) : null}
        </div>
        {action}
      </div>

      {isError ? (
        <Alert variant="destructive">
          <AlertTitle>Não foi possível carregar</AlertTitle>
          <AlertDescription>
            Verifique sua chave RAWG e tente novamente.
          </AlertDescription>
        </Alert>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => (
                <GameCardSkeleton key={i} />
              ))
            : games.map((game, index) => (
                <GameCard key={game.id} game={game} index={index} />
              ))}
        </div>
      )}
    </section>
  )
}

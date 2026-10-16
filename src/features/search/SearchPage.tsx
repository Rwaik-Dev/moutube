import { useQuery } from '@tanstack/react-query'
import { SearchIcon } from 'lucide-react'
import { motion } from 'motion/react'
import { Link, useSearchParams } from 'react-router-dom'

import { GameCard } from '@/components/games/GameCard'
import { GameCardSkeleton } from '@/components/games/GameCardSkeleton'
import {
  EmptySearchState,
  ErrorState,
  PageContainer,
} from '@/components/games/QueryState'
import { Button } from '@/components/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from '@/components/ui/empty'
import { searchGames } from '@/lib/rawg/api'
import { rawgKeys } from '@/lib/rawg/keys'

export function SearchPage() {
  const [params] = useSearchParams()
  const query = (params.get('q') ?? '').trim()

  const searchQuery = useQuery({
    queryKey: rawgKeys.list({ search: query, page_size: 24 }),
    queryFn: () => searchGames(query, 1, 24),
    enabled: query.length > 0,
  })

  return (
    <PageContainer>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mb-8 flex flex-col gap-2"
      >
        <h1 className="font-heading text-3xl font-bold md:text-4xl">Busca</h1>
        {query ? (
          <p className="text-muted-foreground">
            Resultados para “{query}”
            {searchQuery.data
              ? ` · ${searchQuery.data.count.toLocaleString('pt-BR')} jogos`
              : null}
          </p>
        ) : (
          <p className="text-muted-foreground">
            Digite um termo na barra superior para pesquisar no catálogo RAWG.
          </p>
        )}
      </motion.div>

      {!query ? (
        <Empty className="border border-dashed border-border py-16">
          <EmptyHeader>
            <EmptyTitle>Comece uma busca</EmptyTitle>
            <EmptyDescription>
              Use a barra no topo para pesquisar jogos no catálogo RAWG.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button render={<Link to="/" />}>
              <SearchIcon data-icon="inline-start" />
              Voltar à home
            </Button>
          </EmptyContent>
        </Empty>
      ) : searchQuery.isError ? (
        <ErrorState description="Falha ao buscar jogos. Confira a API key e tente de novo." />
      ) : searchQuery.isLoading ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <GameCardSkeleton key={i} />
          ))}
        </div>
      ) : (searchQuery.data?.results.length ?? 0) === 0 ? (
        <EmptySearchState query={query} />
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {searchQuery.data?.results.map((game, index) => (
            <GameCard key={game.id} game={game} index={index} />
          ))}
        </div>
      )}
    </PageContainer>
  )
}

import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

import { GameHero } from '@/components/games/GameHero'
import { GameSection } from '@/components/games/GameSection'
import { Button } from '@/components/ui/button'
import { currentYearDates, getGames } from '@/lib/rawg/api'
import { rawgKeys } from '@/lib/rawg/keys'

export function HomePage() {
  const featuredQuery = useQuery({
    queryKey: rawgKeys.list({ ordering: '-added', page_size: 5 }),
    queryFn: () => getGames({ ordering: '-added', page_size: 5 }),
  })

  const topRatedQuery = useQuery({
    queryKey: rawgKeys.list({ ordering: '-rating', page_size: 8, metacritic: '80,100' }),
    queryFn: () =>
      getGames({ ordering: '-rating', page_size: 8, metacritic: '80,100' }),
  })

  const newReleasesQuery = useQuery({
    queryKey: rawgKeys.list({
      ordering: '-released',
      page_size: 8,
      dates: currentYearDates(),
    }),
    queryFn: () =>
      getGames({
        ordering: '-released',
        page_size: 8,
        dates: currentYearDates(),
      }),
  })

  const trendingQuery = useQuery({
    queryKey: rawgKeys.list({ ordering: '-metacritic', page_size: 8 }),
    queryFn: () => getGames({ ordering: '-metacritic', page_size: 8 }),
  })

  const heroGame = featuredQuery.data?.results?.[0]

  return (
    <div>
      <GameHero game={heroGame} isLoading={featuredQuery.isLoading} />

      <GameSection
        title="Destaques"
        description="Títulos em evidência com base na popularidade recente da RAWG."
        games={featuredQuery.data?.results?.slice(1) ?? []}
        isLoading={featuredQuery.isLoading}
        isError={featuredQuery.isError}
        action={
          <Button render={<Link to="/search" />} variant="outline" size="sm">
            Buscar jogos
          </Button>
        }
      />

      <GameSection
        title="Bem avaliados"
        description="Jogos com alta nota da comunidade e Metacritic."
        games={topRatedQuery.data?.results ?? []}
        isLoading={topRatedQuery.isLoading}
        isError={topRatedQuery.isError}
      />

      <GameSection
        title="Lançamentos"
        description={`Novidades de ${new Date().getFullYear()} no catálogo.`}
        games={newReleasesQuery.data?.results ?? []}
        isLoading={newReleasesQuery.isLoading}
        isError={newReleasesQuery.isError}
      />

      <GameSection
        title="Em alta"
        description="Seleção ordenada por Metacritic para explorar o melhor do momento."
        games={trendingQuery.data?.results ?? []}
        isLoading={trendingQuery.isLoading}
        isError={trendingQuery.isError}
      />
    </div>
  )
}

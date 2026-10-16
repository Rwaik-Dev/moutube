import { useQuery } from '@tanstack/react-query'
import { motion } from 'motion/react'
import {
  CalendarIcon,
  ExternalLinkIcon,
  HeartIcon,
  ShoppingCartIcon,
  StarIcon,
} from 'lucide-react'
import { useState, type ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'sonner'

import {
  ErrorState,
  PageContainer,
} from '@/components/games/QueryState'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { getGameById, getGameScreenshots } from '@/lib/rawg/api'
import { rawgKeys } from '@/lib/rawg/keys'

export function GameDetailPage() {
  const { id } = useParams()
  const [activeShot, setActiveShot] = useState(0)

  const detailQuery = useQuery({
    queryKey: rawgKeys.detail(id ?? ''),
    queryFn: () => getGameById(id!),
    enabled: Boolean(id),
  })

  const shotsQuery = useQuery({
    queryKey: rawgKeys.screenshots(id ?? ''),
    queryFn: () => getGameScreenshots(id!),
    enabled: Boolean(id),
  })

  if (detailQuery.isLoading) {
    return (
      <PageContainer>
        <div className="flex flex-col gap-6">
          <Skeleton className="aspect-video w-full max-w-4xl rounded-xl" />
          <Skeleton className="h-10 w-2/3" />
          <Skeleton className="h-24 w-full" />
        </div>
      </PageContainer>
    )
  }

  if (detailQuery.isError || !detailQuery.data) {
    return (
      <PageContainer>
        <ErrorState
          title="Jogo não encontrado"
          description="Não foi possível carregar este título. Ele pode não existir ou a API falhou."
        />
        <div className="mt-6">
          <Button render={<Link to="/" />}>Voltar ao início</Button>
        </div>
      </PageContainer>
    )
  }

  const game = detailQuery.data
  const screenshots = shotsQuery.data?.results ?? []
  const gallery =
    screenshots.length > 0
      ? screenshots.map((s) => s.image)
      : game.background_image
        ? [game.background_image]
        : []
  const mainImage = gallery[activeShot] ?? game.background_image

  return (
    <div>
      <section className="relative min-h-[45vh] overflow-hidden">
        {mainImage ? (
          <img
            src={mainImage}
            alt=""
            className="absolute inset-0 size-full object-cover"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/30" />
      </section>

      <PageContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="-mt-28 relative z-10 flex flex-col gap-8 lg:flex-row"
        >
          <div className="flex min-w-0 flex-1 flex-col gap-6">
            <div className="overflow-hidden rounded-xl border border-border bg-card/80 shadow-2xl backdrop-blur">
              {mainImage ? (
                <img
                  src={mainImage}
                  alt={game.name}
                  className="aspect-video w-full object-cover"
                />
              ) : (
                <div className="flex aspect-video items-center justify-center text-muted-foreground">
                  Sem imagem
                </div>
              )}
              {gallery.length > 1 ? (
                <div className="flex gap-2 overflow-x-auto p-3">
                  {gallery.map((src, index) => (
                    <button
                      key={`${src}-${index}`}
                      type="button"
                      onClick={() => setActiveShot(index)}
                      className={`size-16 shrink-0 overflow-hidden rounded-md border transition ${
                        index === activeShot
                          ? 'border-primary ring-2 ring-primary/40'
                          : 'border-border opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={src} alt="" className="size-full object-cover" />
                    </button>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="font-heading text-3xl font-extrabold md:text-5xl">
                {game.name}
              </h1>
              <div className="flex flex-wrap items-center gap-2">
                {game.genres.map((g) => (
                  <Badge key={g.id} variant="secondary">
                    {g.name}
                  </Badge>
                ))}
              </div>
              <p className="max-w-3xl whitespace-pre-line text-muted-foreground leading-relaxed">
                {game.description_raw || 'Sem descrição disponível.'}
              </p>
            </div>
          </div>

          <aside className="flex w-full shrink-0 flex-col gap-4 lg:w-80">
            <div className="rounded-xl border border-border bg-card/90 p-4 backdrop-blur">
              <div className="mb-4 flex items-center gap-2 text-primary">
                <StarIcon className="size-5 fill-primary" />
                <span className="text-2xl font-semibold">
                  {game.rating.toFixed(1)}
                </span>
                <span className="text-sm text-muted-foreground">
                  ({game.ratings_count.toLocaleString('pt-BR')} avaliações)
                </span>
              </div>

              <div className="mb-4 flex flex-col gap-2 text-sm">
                <MetaRow
                  label="Lançamento"
                  value={game.released ?? 'TBA'}
                  icon={<CalendarIcon className="size-3.5" />}
                />
                <MetaRow
                  label="Desenvolvedor"
                  value={
                    game.developers.map((d) => d.name).join(', ') || '—'
                  }
                />
                <MetaRow
                  label="Publisher"
                  value={
                    game.publishers.map((p) => p.name).join(', ') || '—'
                  }
                />
                <MetaRow
                  label="Plataformas"
                  value={
                    game.platforms
                      ?.map((p) => p.platform.name)
                      .slice(0, 4)
                      .join(', ') || '—'
                  }
                />
                {game.metacritic ? (
                  <MetaRow label="Metacritic" value={String(game.metacritic)} />
                ) : null}
              </div>

              <Separator className="mb-4" />

              <div className="flex flex-col gap-2">
                <Button
                  size="lg"
                  className="w-full"
                  onClick={() =>
                    toast.message('Compra simulada', {
                      description: 'CTA de UI — sem checkout na v2.',
                    })
                  }
                >
                  Comprar
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full"
                  onClick={() =>
                    toast.success('Adicionado ao carrinho (mock)')
                  }
                >
                  <ShoppingCartIcon data-icon="inline-start" />
                  Carrinho
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full"
                  onClick={() => toast.success('Salvo na wishlist (mock)')}
                >
                  <HeartIcon data-icon="inline-start" />
                  Wishlist
                </Button>
              </div>
            </div>

            {game.website ? (
              <a
                href={game.website}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary underline-offset-4 hover:underline"
              >
                Site oficial
                <ExternalLinkIcon className="size-3.5" />
              </a>
            ) : null}

            {game.stores && game.stores.length > 0 ? (
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Disponível em</p>
                <div className="flex flex-wrap gap-2">
                  {game.stores.map((store) => (
                    <Badge key={store.id} variant="outline">
                      {store.store.name}
                    </Badge>
                  ))}
                </div>
              </div>
            ) : null}
          </aside>
        </motion.div>
      </PageContainer>
    </div>
  )
}

function MetaRow({
  label,
  value,
  icon,
}: {
  label: string
  value: string
  icon?: ReactNode
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
        {icon}
        {label}
      </span>
      <span className="text-foreground">{value}</span>
    </div>
  )
}

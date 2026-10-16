import { AlertCircleIcon, SearchXIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'

export function ErrorState({
  title = 'Algo deu errado',
  description = 'Não foi possível carregar os dados da RAWG.',
}: {
  title?: string
  description?: string
}) {
  return (
    <Alert variant="destructive" className="mx-auto max-w-xl">
      <AlertCircleIcon />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  )
}

export function EmptySearchState({ query }: { query: string }) {
  return (
    <Empty className="border border-dashed border-border py-16">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <SearchXIcon />
        </EmptyMedia>
        <EmptyTitle>Nenhum jogo encontrado</EmptyTitle>
        <EmptyDescription>
          Não encontramos resultados para “{query}”. Tente outro termo.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button render={<Link to="/" />}>Voltar ao início</Button>
      </EmptyContent>
    </Empty>
  )
}

export function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6 md:py-10">
      {children}
    </div>
  )
}

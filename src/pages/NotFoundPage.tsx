import { Link } from 'react-router-dom'

import { PageContainer } from '@/components/games/QueryState'
import { Button } from '@/components/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from '@/components/ui/empty'

export function NotFoundPage() {
  return (
    <PageContainer>
      <Empty className="border border-dashed py-20">
        <EmptyHeader>
          <EmptyTitle className="text-2xl">Página não encontrada</EmptyTitle>
          <EmptyDescription>
            O endereço que você acessou não existe neste catálogo.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button render={<Link to="/" />}>Ir para o início</Button>
        </EmptyContent>
      </Empty>
    </PageContainer>
  )
}

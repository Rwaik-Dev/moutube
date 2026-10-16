import { Skeleton } from '@/components/ui/skeleton'

export function GameCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border border-border/70 bg-card/50">
      <Skeleton className="aspect-video w-full rounded-none" />
      <div className="flex flex-col gap-2 p-3">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
      </div>
    </div>
  )
}

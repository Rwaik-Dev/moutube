export const rawgKeys = {
  all: ['rawg'] as const,
  lists: () => [...rawgKeys.all, 'list'] as const,
  list: (params: Record<string, unknown>) =>
    [...rawgKeys.lists(), params] as const,
  details: () => [...rawgKeys.all, 'detail'] as const,
  detail: (id: string | number) => [...rawgKeys.details(), id] as const,
  screenshots: (id: string | number) =>
    [...rawgKeys.detail(id), 'screenshots'] as const,
}

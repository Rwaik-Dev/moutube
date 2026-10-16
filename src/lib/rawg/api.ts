import { rawgFetch } from './client'
import type {
  GamesQueryParams,
  RawgGame,
  RawgGameDetail,
  RawgListResponse,
  RawgScreenshot,
} from './types'

export function getGames(params: GamesQueryParams = {}) {
  return rawgFetch<RawgListResponse<RawgGame>>('/games', {
    page: params.page ?? 1,
    page_size: params.page_size ?? 12,
    search: params.search,
    ordering: params.ordering,
    dates: params.dates,
    metacritic: params.metacritic,
  })
}

export function searchGames(query: string, page = 1, pageSize = 20) {
  return getGames({
    search: query,
    page,
    page_size: pageSize,
  })
}

export function getGameById(id: string | number) {
  return rawgFetch<RawgGameDetail>(`/games/${id}`)
}

export function getGameScreenshots(id: string | number) {
  return rawgFetch<RawgListResponse<RawgScreenshot>>(
    `/games/${id}/screenshots`,
    { page_size: 12 },
  )
}

/** Current year-to-date range for "new releases" section */
export function currentYearDates() {
  const year = new Date().getFullYear()
  return `${year}-01-01,${year}-12-31`
}

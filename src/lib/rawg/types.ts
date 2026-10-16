export interface RawgListResponse<T> {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}

export interface RawgGenre {
  id: number
  name: string
  slug: string
}

export interface RawgPlatformInfo {
  platform: {
    id: number
    name: string
    slug: string
  }
}

export interface RawgStore {
  id: number
  url: string
  store: {
    id: number
    name: string
    slug: string
  }
}

export interface RawgShortScreenshot {
  id: number
  image: string
}

export interface RawgGame {
  id: number
  slug: string
  name: string
  released: string | null
  background_image: string | null
  rating: number
  ratings_count: number
  metacritic: number | null
  playtime: number
  genres: RawgGenre[]
  platforms: RawgPlatformInfo[]
  short_screenshots?: RawgShortScreenshot[]
  stores?: RawgStore[]
}

export interface RawgGameDetail extends RawgGame {
  description_raw: string
  website: string
  developers: { id: number; name: string }[]
  publishers: { id: number; name: string }[]
  tags: { id: number; name: string }[]
  esrb_rating: { id: number; name: string } | null
}

export interface RawgScreenshot {
  id: number
  image: string
  width: number
  height: number
}

export type GamesQueryParams = {
  page?: number
  page_size?: number
  search?: string
  ordering?: string
  dates?: string
  metacritic?: string
}

const BASE_URL = '/api/rawg'

export class RawgError extends Error {
  status: number

  constructor(message: string, status: number) {
    super(message)
    this.name = 'RawgError'
    this.status = status
  }
}

export async function rawgFetch<T>(
  path: string,
  params?: Record<string, string | number | undefined>,
): Promise<T> {
  const url = new URL(`${BASE_URL}${path}`, window.location.origin)

  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== '') {
        url.searchParams.set(key, String(value))
      }
    }
  }

  const response = await fetch(url.toString())

  if (!response.ok) {
    throw new RawgError(
      `RAWG request failed (${response.status})`,
      response.status,
    )
  }

  return response.json() as Promise<T>
}

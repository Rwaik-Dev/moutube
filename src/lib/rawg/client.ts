const RAWG_API_BASE = 'https://api.rawg.io/api'

export class RawgError extends Error {
  status: number

  constructor(message: string, status: number) {
    super(message)
    this.name = 'RawgError'
    this.status = status
  }
}

/**
 * Calls RAWG directly from the browser.
 * Requires VITE_RAWG_API_KEY (local .env and Vercel Environment Variables).
 *
 * Note: Vite inlines VITE_* into the client bundle — fine for a free RAWG portfolio key.
 * The /api/rawg serverless proxy remains available as an optional server-side alternative.
 */
export async function rawgFetch<T>(
  path: string,
  params?: Record<string, string | number | undefined>,
): Promise<T> {
  const apiKey = import.meta.env.VITE_RAWG_API_KEY as string | undefined

  if (!apiKey) {
    throw new RawgError(
      'VITE_RAWG_API_KEY is missing. Set it in .env (local) or Vercel Environment Variables, then redeploy.',
      500,
    )
  }

  const url = new URL(
    `${RAWG_API_BASE}/${path.replace(/^\/+/, '')}`,
  )

  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== '') {
        url.searchParams.set(key, String(value))
      }
    }
  }

  url.searchParams.set('key', apiKey)

  const response = await fetch(url.toString())

  if (!response.ok) {
    throw new RawgError(
      `RAWG request failed (${response.status})`,
      response.status,
    )
  }

  return response.json() as Promise<T>
}

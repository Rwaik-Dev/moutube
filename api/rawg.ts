/**
 * RAWG proxy for Vercel (Vite SPA).
 * Uses the Web Standard fetch handler (works without Next.js catch-all routes).
 *
 * Client calls: GET /api/rawg?path=games&page_size=8
 */
export default {
  async fetch(request: Request): Promise<Response> {
    if (request.method !== 'GET') {
      return Response.json({ error: 'Method not allowed' }, { status: 405 })
    }

    const apiKey = process.env.RAWG_API_KEY || process.env.VITE_RAWG_API_KEY
    if (!apiKey) {
      return Response.json(
        {
          error:
            'RAWG API key missing. Set RAWG_API_KEY (recommended) or VITE_RAWG_API_KEY in Vercel env vars.',
        },
        { status: 500 },
      )
    }

    const incoming = new URL(request.url)
    const resourcePath = (incoming.searchParams.get('path') ?? '').replace(
      /^\/+/,
      '',
    )

    if (!resourcePath) {
      return Response.json(
        {
          error:
            'Missing path. Example: /api/rawg?path=games&page_size=1',
        },
        { status: 400 },
      )
    }

    const upstream = new URL(`https://api.rawg.io/api/${resourcePath}`)
    incoming.searchParams.forEach((value, key) => {
      if (key !== 'path') upstream.searchParams.set(key, value)
    })
    upstream.searchParams.set('key', apiKey)

    try {
      const response = await fetch(upstream.toString(), {
        headers: { Accept: 'application/json' },
      })
      const body = await response.text()

      return new Response(body, {
        status: response.status,
        headers: {
          'Content-Type':
            response.headers.get('content-type') ?? 'application/json',
          'Cache-Control': 's-maxage=300, stale-while-revalidate=600',
        },
      })
    } catch {
      return Response.json(
        { error: 'Failed to reach RAWG API' },
        { status: 502 },
      )
    }
  },
}

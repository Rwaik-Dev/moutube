import type { VercelRequest, VercelResponse } from '@vercel/node'

/**
 * RAWG proxy for Vercel (Vite SPA).
 * Catch-all [...path] is NOT supported outside Next.js, so vercel.json
 * rewrites /api/rawg/:path* → /api/rawg?__path=:path*
 */
export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.RAWG_API_KEY || process.env.VITE_RAWG_API_KEY
  if (!apiKey) {
    return res.status(500).json({
      error:
        'RAWG API key missing. Set RAWG_API_KEY (recommended) or VITE_RAWG_API_KEY in Vercel env vars.',
    })
  }

  const pathValue = req.query.__path
  const resourcePath = Array.isArray(pathValue)
    ? pathValue.join('/')
    : (pathValue ?? '')

  if (!resourcePath) {
    return res.status(400).json({
      error: 'Missing path. Use /api/rawg/<resource> (e.g. /api/rawg/games).',
    })
  }

  const upstream = new URL(`https://api.rawg.io/api/${resourcePath}`)

  for (const [key, value] of Object.entries(req.query)) {
    if (key === '__path' || value === undefined) continue
    if (Array.isArray(value)) {
      for (const item of value) {
        if (item !== undefined) upstream.searchParams.append(key, item)
      }
    } else {
      upstream.searchParams.set(key, value)
    }
  }

  upstream.searchParams.set('key', apiKey)

  try {
    const response = await fetch(upstream.toString(), {
      headers: { Accept: 'application/json' },
    })
    const body = await response.text()

    res.status(response.status)
    res.setHeader(
      'Content-Type',
      response.headers.get('content-type') ?? 'application/json',
    )
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600')
    return res.send(body)
  } catch {
    return res.status(502).json({ error: 'Failed to reach RAWG API' })
  }
}

import type { VercelRequest, VercelResponse } from '@vercel/node'

/**
 * Serverless proxy for RAWG on Vercel.
 * Locally, Vite's server.proxy handles /api/rawg the same way.
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

  const pathParam = req.query.path
  const segments = Array.isArray(pathParam)
    ? pathParam
    : pathParam
      ? [pathParam]
      : []
  const resourcePath = segments.map(encodeURIComponent).join('/')

  const upstream = new URL(`https://api.rawg.io/api/${resourcePath}`)

  for (const [key, value] of Object.entries(req.query)) {
    if (key === 'path' || value === undefined) continue
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

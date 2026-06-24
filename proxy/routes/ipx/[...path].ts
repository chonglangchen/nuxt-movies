import process from 'node:process'
import { ProxyAgent, fetch as undiciFetch } from 'undici'

const proxyUrl = process.env.HTTP_PROXY || process.env.http_proxy
const proxyAgent = proxyUrl ? new ProxyAgent(proxyUrl) : undefined

const aliasMap: Record<string, string> = {
  '/tmdb': 'https://image.tmdb.org/t/p/original',
  '/youtube': 'https://img.youtube.com',
}

export default defineEventHandler(async (event) => {
  let path = event.path.replace('/ipx', '')
  // 剥离 IPX 优化参数，例如 /f_webp&s_400x600/tmdb/xxx.jpg → /tmdb/xxx.jpg
  for (const alias of Object.keys(aliasMap)) {
    const idx = path.indexOf(alias)
    if (idx !== -1) {
      path = path.slice(idx)
      break
    }
  }
  for (const [prefix, baseURL] of Object.entries(aliasMap)) {
    if (path.startsWith(prefix)) {
      const imagePath = path.slice(prefix.length)
      const url = `${baseURL}${imagePath}`
      const res = await undiciFetch(url, proxyAgent ? { dispatcher: proxyAgent } : {})
      const buffer = await res.arrayBuffer()
      const headers = new Headers()
      headers.set('content-type', res.headers.get('content-type') || 'image/jpeg')
      headers.set('cache-control', 'public, max-age=3600')
      return new Response(buffer, { headers })
    }
  }
  return new Response('Not Found', { status: 404 })
})

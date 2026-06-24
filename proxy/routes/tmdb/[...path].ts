import { ProxyAgent, fetch as undiciFetch } from 'undici'

const TMDB_API_URL = 'https://api.themoviedb.org/3'

const proxyAgent = new ProxyAgent('http://127.0.0.1:7890')

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  // eslint-disable-next-line no-console
  console.log(
    'Fetching TMDB API',
    {
      url: getRequestURL(event).href,
      query,
      params: event.context.params,
    },
  )
  const config = useRuntimeConfig()
  if (!config.tmdb.apiKey)
    throw new Error('TMDB API key is not set')
  try {
    // 用 undici 的 fetch 直接走 ProxyAgent，绕过 ofetch
    const searchParams = new URLSearchParams({
      api_key: config.tmdb.apiKey,
      language: 'en-US',
      ...Object.fromEntries(Object.entries(query).map(([k, v]) => [k, String(v)])),
    })
    const url = `${TMDB_API_URL}/${event.context.params!.path}?${searchParams}`
    const res = await undiciFetch(url, { dispatcher: proxyAgent })
    return await res.json()
  }
  catch (e: any) {
    const status = e?.response?.status || 500
    setResponseStatus(event, status)
    return {
      error: String(e)?.replace(config.tmdb.apiKey, '***'),
    }
  }
})

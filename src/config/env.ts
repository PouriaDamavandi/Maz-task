export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string
export const USE_MOCK = import.meta.env.VITE_USE_MOCK === 'true'

if (!API_BASE_URL) {
  throw new Error('API base URL is not defined')
}

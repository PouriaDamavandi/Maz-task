import { API_BASE_URL } from '@/config/env'

export async function http<T>(url: string): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${url}`)

  if (!res.ok) {
    throw new Error(`HTTP error: ${res.status}`)
  }

  return res.json()
}

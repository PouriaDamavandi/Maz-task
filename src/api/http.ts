import { API_BASE_URL } from '@/config/env'

export async function http<T>(url: string): Promise<T> {
  const controller = new AbortController()

  const timeout = setTimeout(() => controller.abort(), 10000)

  try {
    const res = await fetch(`${API_BASE_URL}${url}`, {
      signal: controller.signal,
    })

    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status}`)
    }

    return await res.json()
  } finally {
    clearTimeout(timeout)
  }
}

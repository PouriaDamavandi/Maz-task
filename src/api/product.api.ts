import { http } from './http'
import { USE_MOCK } from '@/config/env'
import { mockProducts } from '@/api/product.mock'
import type { Product } from '@/types/product'

// GET ALL
export async function getProducts(): Promise<Product[]> {
  if (USE_MOCK) {
    return mockProducts
  }

  try {
    return await http<Product[]>('/products')
  } catch (err) {
    console.warn('API failed, falling back to mock', err)
    return mockProducts
  }
}

// GET ONE
export async function getProductById(id: number): Promise<Product> {
  if (USE_MOCK) {
    const product = mockProducts.find((p) => p.id === id)
    if (!product) throw new Error('Mock product not found')
    return product
  }

  try {
    return await http<Product>(`/products/${id}`)
  } catch (err) {
    console.warn('API failed, falling back to mock', err)

    const product = mockProducts.find((p) => p.id === id)
    if (!product) throw err

    return product
  }
}

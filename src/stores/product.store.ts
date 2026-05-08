import { defineStore } from 'pinia'
import { getProducts, getProductById } from '@/api/product.api'
import type { Product } from '@/types/product'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as Product[],
    selectedProduct: null as Product | null,
    loading: false,
    error: null as string | null,
    isFetched: false,
  }),

  actions: {
    async fetchProducts() {
      this.loading = true
      this.error = null

      try {
        this.products = await getProducts()
        this.isFetched = true
      } catch {
        this.error = 'Failed to fetch products'
      } finally {
        this.loading = false
      }
    },

    async fetchProduct(id: number) {
      this.loading = true
      try {
        this.selectedProduct = await getProductById(id)
      } catch {
        this.error = 'Failed to fetch product'
      } finally {
        this.loading = false
      }
    },
  },
})

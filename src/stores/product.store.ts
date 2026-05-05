import { defineStore } from 'pinia'

type Product = {
  id: string
  title: string
  image: string
  category: string
  price: number
}

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as Product[],
    loading: false,
    error: false
  }),

  actions: {
    async fetchProducts() {
      this.loading = true

      // Mock (replace with API later)
      this.products = [
        { id: '1', title: 'Phone', image: '', category: 'phones', price: 200 },
        { id: '2', title: 'Laptop', image: '', category: 'laptops', price: 1000 },
      ]

      this.loading = false
    },
  },
})

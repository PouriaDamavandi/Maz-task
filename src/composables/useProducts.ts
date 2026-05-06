import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useProductStore } from '@/stores/product.store'
import { useFilterStore } from '@/stores/filter.store'

export function useProducts() {
  const productStore = useProductStore()
  const filterStore = useFilterStore()

  const { products, loading, error } = storeToRefs(productStore)
  const { search, category, sort, hideZeroPrice } = storeToRefs(filterStore)

  const filteredProducts = computed(() => {
    let result = [...products.value]

    if (search.value) {
      result = result.filter((p) => p.title.toLowerCase().includes(search.value.toLowerCase()))
    }

    if (category.value) {
      result = result.filter((p) => p.category === category.value)
    }

    if (hideZeroPrice.value) {
      result = result.filter((p) => p.price > 0)
    }

    switch (sort.value) {
      case 'price-asc':
        result = [...result].sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result = [...result].sort((a, b) => b.price - a.price)
        break
      case 'alphabetical':
        result = [...result].sort((a, b) => a.title.localeCompare(b.title))
        break
      case 'rating':
        result = [...result].sort((a, b) => b.rating.rate - a.rating.rate)
        break
    }

    return result
  })

  const categories = computed(() => {
    const map: Record<string, number> = {}

    products.value.forEach((p) => {
      map[p.category] = (map[p.category] || 0) + 1
    })

    return Object.entries(map).map(([name, count]) => ({
      id: name,
      name,
      count,
    }))
  })

  return {
    products: filteredProducts,
    categories,
    loading,
    error,
    fetchProducts: productStore.fetchProducts,
  }
}

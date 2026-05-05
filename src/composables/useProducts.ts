import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useProductStore } from '@/stores/product.store'
import { useFilterStore } from '@/stores/filter.store'

export function useProducts() {
  const productStore = useProductStore()
  const filterStore = useFilterStore()

  const { products } = storeToRefs(productStore)
  const { search, sort, category } = storeToRefs(filterStore)

  const filteredProducts = computed(() => {
    let result = [...products.value]

    // Search
    if (search.value) {
      result = result.filter((p) => p.title.toLowerCase().includes(search.value.toLowerCase()))
    }

    // Category
    if (category.value) {
      result = result.filter((p) => p.category === category.value)
    }

    // Sort
    if (sort.value === 'price') {
      result.sort((a, b) => a.price - b.price)
    }

    return result
  })

  return {
    products: filteredProducts,
    fetchProducts: productStore.fetchProducts,
  }
}

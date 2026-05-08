import { defineStore } from 'pinia'

export type SortType = 'price-asc' | 'price-desc' | 'alphabetical' | 'rating'

export const useFilterStore = defineStore('filter', {
  state: () => ({
    search: '',
    category: '',
    sort: '',
    hideZeroPrice: false,
  }),

  actions: {
    setSearch(val: string) {
      this.search = val
    },
    setCategory(val: string) {
      this.category = val
    },
    setSort(val: SortType) {
      this.sort = val
    },
    setHideZeroPrice(val: boolean) {
      this.hideZeroPrice = val
    },

    clearFilter(type: 'search' | 'category' | 'sort') {
      this[type] = ''
    },

    resetAll() {
      this.search = ''
      this.category = ''
      this.sort = ''
      this.hideZeroPrice = false
    },

    // ✅ URL → Store
    setFromQuery(query: Record<string, unknown>) {
      this.search = (query.search as string) || ''
      this.category = (query.category as string) || ''
      this.sort = (query.sort as SortType) || ''
      this.hideZeroPrice = query.hideZero === 'true'
    },
  },
})

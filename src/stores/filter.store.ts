import { defineStore } from 'pinia'

export type SortType = 'price-asc' | 'price-desc' | 'alphabetical' | 'rating'

type FilterState = {
  search: string
  category: string
  sort: SortType | ''
  hideZeroPrice: boolean
}

export const useFilterStore = defineStore('filter', {
  state: (): FilterState => ({
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

    clearFilter(type: 'search' | 'category' | 'sort' | 'none-zero') {
      if (type === 'search') {
        this.search = ''
      }

      if (type === 'category') {
        this.category = ''
      }

      if (type === 'sort') {
        this.sort = ''
      }
      if (type === 'none-zero') {
        this.hideZeroPrice = false
      }
    },

    resetAll() {
      this.search = ''
      this.category = ''
      this.sort = ''
      this.hideZeroPrice = false
    },

    setFromQuery(query: Record<string, unknown>) {
      this.search = (query.search as string) || ''

      this.category = (query.category as string) || ''

      this.sort = ((query.sort as SortType) || '') as SortType | ''

      this.hideZeroPrice = query.hideZero === 'true'
    },
  },
})

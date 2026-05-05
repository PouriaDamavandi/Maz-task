import { defineStore } from 'pinia'

export const useFilterStore = defineStore('filter', {
  state: () => ({
    search: '',
    sort: '',
    category: '',
  }),

  actions: {
    setSearch(val: string) {
      this.search = val
    },
    setSort(val: string) {
      this.sort = val
    },
    setCategory(val: string) {
      this.category = val
    },
    clearFilterByType(type: 'search' | 'category' | 'sort') {
      this[type] = ''
    },
  },
})

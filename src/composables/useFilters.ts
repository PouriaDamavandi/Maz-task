import { storeToRefs } from 'pinia'
import { useFilterStore } from '@/stores/filter.store'

export function useFilters() {
  const store = useFilterStore()
  const { search, sort, category } = storeToRefs(store)

  return {
    search,
    sort,
    category,
    setSearch: store.setSearch,
    setSort: store.setSort,
    setCategory: store.setCategory,
    clearFilter: store.clearFilter,
  }
}

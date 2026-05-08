export type FilterType = 'search' | 'category' | 'sort'

export interface FilterItem {
  type: FilterType
  label: string
}

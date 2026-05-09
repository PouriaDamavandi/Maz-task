export type FilterType = 'search' | 'category' | 'sort' | 'none-zero'

export interface FilterItem {
  type: FilterType
  label: string
}

export interface Rating {
  rate: number
  count: number
}

export const CATEGORIES = ["men's clothing", 'jewelery', 'electronics', "women's clothing"] as const

export type Category = (typeof CATEGORIES)[number]

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: Category
  image: string
  rating: Rating
}

export interface Product {
  id: string
  name: string
  price: number
  stars: number
  category: string
  subcategory: string
  info: Info
}

export interface Info {
  description: string
  measures: Measures
}

export interface Measures {
  depth: string
  height: string
  width: string
}

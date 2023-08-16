export interface Product {
  id: string
  name: string
  price: number
  stars: number
  color: string[]
  material: string[]
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

export interface Color {
  name: string
  id: string
  hex: string
  products: Product[]
}

export interface Material {
  name: string
  id: string
  products: Product[]
}

export interface Cart {
  name: string
  id: string
  qty: number
  price: number
  subcategory: string
}

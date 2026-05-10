export interface Category {
  id: number
  name: string
}

export interface Tag {
  id: number
  name: string
}

export interface Product {
  id: number
  name: string
  slug: string
  description: string
  price: number
  stock: number
  image: string | null
  gallery: string[]
  category: Category
  tags: Tag[]
}

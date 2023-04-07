import { instance } from './instance'

export const cartApi = {
  getProducts() {
    return instance.get<ProductsInCartResponseType[]>('cart')
  },
  removeProduct(id: string) {
    return instance.delete(`cart/${id}`)
  },
  addProduct(id: string, title: string) {
    return instance.post<ProductsInCartResponseType>('cart', { id, title })
  },
}

export type ProductsInCartResponseType = {
  id: string
  category: string
  title: string
  price: number
  sizes?: string[]
  currentSize?: string
  color?: string[]
  currentColor?: string
  quantity: number[]
  currentQuantity: number
  image: string
}

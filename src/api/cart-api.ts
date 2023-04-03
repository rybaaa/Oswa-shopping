import { instance } from './instance'

export const cartApi = {
  getProducts() {
    return instance.get<ProductsInCartResponseType[]>('cart')
  },
}

export type ProductsInCartResponseType = {
  id: string
  title: string
  price: number
  sizes: string[]
  currentSize?: string
  color?: string[]
  currentColor?: string
  quantity: number[]
  currentQuantity: number
  image: string
}

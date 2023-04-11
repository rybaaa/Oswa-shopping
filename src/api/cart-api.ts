import { instance } from './instance'

export const cartApi = {
  getProductsFromCart() {
    return instance.get<ProductsInCartResponseType[]>('cart')
  },
  removeProductFromCart(id: string) {
    return instance.delete(`cart/${id}`)
  },
  addProductToCart(id: string, title: string) {
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

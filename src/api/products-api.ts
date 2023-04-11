import { instance } from './instance'

export const productsApi = {
  fetchAllProducts() {
    return instance.get('products')
  },
  fetchAnyCategory(title: string) {
    return instance.get(`products/${title}`)
  },
}

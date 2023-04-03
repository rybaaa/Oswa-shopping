import { instance } from './instance'

export const categoriesApi = {
  getCategories() {
    return instance.get<CategoriesResponseType[]>('categories')
  },
}

export type CategoriesResponseType = {
  id: string
  title: string
  image: string
}

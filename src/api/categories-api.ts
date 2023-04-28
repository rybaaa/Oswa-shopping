import { instance } from './instance'

export const categoriesApi = {
  getCategories() {
    return instance.get<CategoriesResponseType[]>('categories')
  },
  searchForCategories(title: string) {
    console.log('api')
    return instance.get<string[]>(`categories?search=${title}`)
  },
}

export type CategoriesResponseType = {
  id: string
  title: string
  image: string
}

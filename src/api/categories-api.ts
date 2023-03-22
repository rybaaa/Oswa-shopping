import { instance } from './instance'

export const categoriesApi = {
  getCategories() {
    return instance.get('categories')
  },
}

type CategoriesType = {
  id: string
  title: string
}

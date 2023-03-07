import React from 'react'
import { CategoryItem } from './CategoryItem/CategoryItem'
import s from './Category.module.scss'

export const Category = () => {
  const categories = [
    'Makeup',
    'Shoes',
    'Bags',
    'Clothes',
    'Watch',
    'Accessories',
    'Nails',
    'Lingerie',
    'Perfume',
    'Pajama',
  ]
  const categoriesList = categories.map((el, index) => <CategoryItem key={index} item={el} />)
  return (
    <div className={s.container}>
      <div className={s.categories}>{categoriesList}</div>
    </div>
  )
}

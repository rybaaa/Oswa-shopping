import React from 'react'
import { CategoryItem } from './CategoryItem/CategoryItem'
import s from './Category.module.scss'
import { Header } from '../../app/Header/Header'
import { Footer } from '../../app/Footer/Footer'
import { Discount } from './Discount/Discount'

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
      <Header
        background={'linear-gradient(180.52deg, #FA90D6 -9.05%, rgba(96, 26, 73, 0.83) 107.41%)'}
      />
      <Discount />
      <div className={s.categories}>{categoriesList}</div>
      <Footer />
    </div>
  )
}

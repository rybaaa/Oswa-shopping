import React, { useEffect } from 'react'
import { CategoryItem } from './CategoryItem/CategoryItem'
import s from './Category.module.scss'
import { Header } from '../../app/Header/Header'
import { Footer } from '../../app/Footer/Footer'
import { Discount } from './Discount/Discount'
import { useAppDispatch, useAppSelector } from '../../app/store'
import { categoriesSelector, getCategoriesTC } from './category-reducer'
import { ErrorSnackbar } from '../../common/components/error-snackbar/ErrorSnackbar'

export const Category = () => {
  const dispatch = useAppDispatch()
  const categories = useAppSelector(categoriesSelector)

  useEffect(() => {
    dispatch(getCategoriesTC())
  }, [])

  const categoriesList = categories.map((el) => (
    <CategoryItem key={el.id} title={el.title} image={el.image} />
  ))
  return (
    <div className={s.container}>
      <ErrorSnackbar />
      <Header
        background={'linear-gradient(180.52deg, #FA90D6 -9.05%, rgba(96, 26, 73, 0.83) 107.41%)'}
      />
      <Discount />
      <h2 className={s.title}>Categories in the store</h2>
      <div className={s.categories}>{categoriesList}</div>
      <Footer />
    </div>
  )
}

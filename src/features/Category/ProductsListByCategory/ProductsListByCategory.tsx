import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import s from './ProductsListByCategory.module.scss'
import { ErrorSnackbar } from '../../../common/components/error-snackbar/ErrorSnackbar'
import { Header } from '../../../app/Header/Header'
import { Footer } from '../../../app/Footer/Footer'
import { Product } from './Product/Product'
import { useAppDispatch, useAppSelector } from '../../../app/store'
import { currentCategorySelector, fetchAnyCategoryTC } from './products-reducer'

export const ProductsListByCategory = () => {
  const dispatch = useAppDispatch()
  const currentCategory = useAppSelector(currentCategorySelector)
  const { title } = useParams()
  let productsList
  if (currentCategory) {
    productsList = currentCategory.items.map((it) => (
      <Product
        key={it.id}
        id={it.id}
        title={it.title}
        price={it.price}
        quantity={it.quantity}
        currentQuantity={it.currentQuantity}
        image={it.image}
        category={it.category}
      />
    ))
  } else productsList = null

  useEffect(() => {
    if (title) {
      dispatch(fetchAnyCategoryTC(title))
    }
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={s.container}>
      <ErrorSnackbar />
      <Header
        background={'linear-gradient(180.52deg, #FA90D6 -9.05%, rgba(96, 26, 73, 0.83) 107.41%)'}
      />
      <div className={s.category__item__wrapper}>
        <div className={s.category__item__headerBlock}>
          <h2 className={s.category__item__header}>{title}</h2>
          <p className={s.category__item__quantity}>{currentCategory.items.length} items</p>
        </div>
        <div className={s.products__list}>{productsList}</div>
      </div>
      <Footer />
    </div>
  )
}

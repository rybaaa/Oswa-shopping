import React, { useEffect } from 'react'
import { MainPage } from './MainPage/MainPage'
import { Collections } from './Collections/Collections'
import { Footer } from '../../app/Footer/Footer'
import { useAppDispatch, useAppSelector } from '../../app/store'
import { setAppInitializedAC } from '../../app/app-reducer'
import { getProductsInCartTC, productsQuantitySelector } from '../../features/cart/cart-reducer'

export const Home = () => {
  const dispatch = useAppDispatch()
  const productsQuantity = useAppSelector(productsQuantitySelector)

  useEffect(() => {
    dispatch(setAppInitializedAC({ isInitialized: true }))
  }, [])
  useEffect(() => {
    console.log(productsQuantity)
    dispatch(getProductsInCartTC())
  }, [productsQuantity])
  return (
    <div>
      <MainPage />
      <Collections />
      <Footer />
    </div>
  )
}

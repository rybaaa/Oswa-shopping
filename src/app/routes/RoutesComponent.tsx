import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PATH } from './routes'
import { Home } from 'components/Home/Home'
import { Category } from 'features/Category/Category'
import { Cart } from 'features/cart/Cart'
import { Payment } from 'components/Payment/Payment'
import { Account } from 'components/Account/Account'
import { Error404 } from '../Error404/Error404'
import { ProductsListByCategory } from '../../features/Category/ProductsListByCategory/ProductsListByCategory'

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path={PATH.MAIN} element={<Home />} />
      <Route path={PATH.CATEGORY} element={<Category />} />
      <Route path={PATH.CATEGORY + '/:title'} element={<ProductsListByCategory />} />
      <Route path={PATH.CART} element={<Cart />} />
      <Route path={PATH.PAYMENT} element={<Payment />} />
      <Route path={PATH.ACCOUNT} element={<Account />} />
      <Route path={'*'} element={<Error404 />} />
    </Routes>
  )
}

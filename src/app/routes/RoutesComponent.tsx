import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PATH } from './routes'
import { Home } from '../../components/Home/Home'
import { Category } from '../../components/Category/Category'
import { Cart } from '../../components/Cart/Cart'
import { Payment } from '../../components/Payment/Payment'
import { Account } from '../../components/Account/Account'

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path={PATH.MAIN} element={<Home />} />
      <Route path={PATH.CATEGORY} element={<Category />} />
      <Route path={PATH.CART} element={<Cart />} />
      <Route path={PATH.PAYMENT} element={<Payment />} />
      <Route path={PATH.ACCOUNT} element={<Account />} />
    </Routes>
  )
}

import React from 'react'
import s from './Header.module.scss'
import logo from 'assets/logo.svg'
import squares from 'assets/squares.svg'
import { NavLink } from 'react-router-dom'
import { PATH } from '../routes/routes'
import { useAppSelector } from '../store'
import { productsQuantity } from '../../features/cart/cart-reducer'

type HeaderPropsType = {
  background?: string
}

export const Header = (props: HeaderPropsType) => {
  const quantityProducts = useAppSelector(productsQuantity)
  return (
    <div className={s.container} style={{ background: props.background }}>
      <div className={s.logo}>
        <img src={logo} alt={'logo'} />
      </div>
      <div className={s.navbar}>
        <NavLink
          to={PATH.MAIN}
          className={({ isActive }) => (isActive ? s.isActive : s.navbarItem)}
        >
          Home
        </NavLink>
        <NavLink
          to={PATH.CATEGORY}
          className={({ isActive }) => (isActive ? s.isActive : s.navbarItem)}
        >
          Category
        </NavLink>
        <NavLink
          to={PATH.CART}
          className={({ isActive }) => (isActive ? s.isActive : s.navbarItem)}
        >
          <div>
            Cart
            <div className={s.quantity}>{quantityProducts}</div>
          </div>
        </NavLink>
        <NavLink
          to={PATH.PAYMENT}
          className={({ isActive }) => (isActive ? s.isActive : s.navbarItem)}
        >
          Payment
        </NavLink>
        <NavLink
          to={PATH.ACCOUNT}
          className={({ isActive }) => (isActive ? s.isActive : s.navbarItem)}
        >
          Account
        </NavLink>
      </div>
      <button className={s.login}>Login</button>
      <div className={s.effects}>
        <img src={squares} alt={'side effects'} />
      </div>
    </div>
  )
}

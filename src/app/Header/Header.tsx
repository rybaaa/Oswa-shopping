import React from 'react'
import s from './Header.module.scss'
import logo from 'assets/logo.svg'
import squares from 'assets/squares.svg'
import { NavLink } from 'react-router-dom'
import { PATH } from '../routes/routes'

type HeaderPropsType = {
  background?: string
}

export const Header = (props: HeaderPropsType) => {
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
        <button className={s.navbarItem}>Cart</button>
        <button className={s.navbarItem}>Payment</button>
        <button className={s.navbarItem}>Account</button>
      </div>
      <button className={s.login}>Login</button>
      <div className={s.effects}>
        <img src={squares} alt={'side effects'} />
      </div>
    </div>
  )
}

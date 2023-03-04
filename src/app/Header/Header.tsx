import React from 'react'
import s from './Header.module.scss'
import logo from 'assets/logo.svg'
import squares from 'assets/squares.svg'
export const Header = () => {
  return (
    <div className={s.container}>
      <div className={s.logo}>
        <img src={logo} alt={'logo'} />
      </div>
      <div className={s.navbar}>
        <button className={s.navbarItem}>Home</button>
        <button className={s.navbarItem}>Category</button>
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

import React from 'react'
import s from './Header.module.scss'
import logo from 'assets/logo.svg'
import squares from 'assets/squares.svg'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../routes/routes'

type HeaderPropsType = {
  background?: string
}

export const Header = (props: HeaderPropsType) => {
  const navigate = useNavigate()
  const goHome = () => {
    navigate(PATH.MAIN)
  }
  const goToCategory = () => {
    navigate(PATH.CATEGORY)
  }
  return (
    <div className={s.container} style={{ background: props.background }}>
      <div className={s.logo}>
        <img src={logo} alt={'logo'} />
      </div>
      <div className={s.navbar}>
        <button className={s.navbarItem} onClick={goHome}>
          Home
        </button>
        <button className={s.navbarItem} onClick={goToCategory}>
          Category
        </button>
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

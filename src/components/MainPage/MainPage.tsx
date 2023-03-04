import React from 'react'
import s from '../MainPage/MainPage.module.scss'
import zoom from 'assets/zoom.svg'

export const MainPage = () => {
  return (
    <div className={s.wrapper}>
      <form className={s.input}>
        <input className={s.search} type={'text'} placeholder={'Search what you need'}></input>
        <img className={s.zoom} src={zoom} alt={'zoom'} />
      </form>
    </div>
  )
}

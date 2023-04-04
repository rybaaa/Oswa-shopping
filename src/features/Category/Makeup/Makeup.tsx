import React from 'react'
import { useParams } from 'react-router-dom'
import s from './Makeup.module.scss'
import { ErrorSnackbar } from '../../../common/components/error-snackbar/ErrorSnackbar'
import { Header } from '../../../app/Header/Header'
import { Footer } from '../../../app/Footer/Footer'

export const Makeup = () => {
  const { title } = useParams()
  return (
    <div className={s.container}>
      <ErrorSnackbar />
      <Header
        background={'linear-gradient(180.52deg, #FA90D6 -9.05%, rgba(96, 26, 73, 0.83) 107.41%)'}
      />
      <div className={s.category__item__wrapper}>
        <div className={s.category__item__headerBlock}>
          <h2 className={s.category__item__header}>{title}</h2>
          <p className={s.category__item__quantity}>3 items</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

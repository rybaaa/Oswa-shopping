import React from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import error from 'assets/404.png'

export const Error404 = () => {
  return (
    <div>
      <Header
        background={'linear-gradient(180.52deg, #FA90D6 -9.05%, rgba(96, 26, 73, 0.83) 107.41%)'}
      />
      <img src={error} alt={'error404'} />
      <Footer />
    </div>
  )
}

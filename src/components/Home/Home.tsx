import React from 'react'
import { MainPage } from './MainPage/MainPage'
import { Collections } from './Collections/Collections'
import { Footer } from '../../app/Footer/Footer'

export const Home = () => {
  return (
    <div>
      <MainPage />
      <Collections />
      <Footer />
    </div>
  )
}

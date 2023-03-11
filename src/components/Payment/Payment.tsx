import React from 'react'
import progress from 'assets/inProgress.jpg'
import { Header } from 'app/Header/Header'
import { Footer } from 'app/Footer/Footer'

export const Payment = () => {
  return (
    <div>
      <Header
        background={'linear-gradient(180.52deg, #FA90D6 -9.05%, rgba(96, 26, 73, 0.83) 107.41%)'}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={progress} alt={'page in progress'} />
      </div>
      <Footer />
    </div>
  )
}

import React from 'react'
import s from './App.module.scss'
import { Header } from './Header/Header'
import { RoutesComponent } from './routes/RoutesComponent'

function App() {
  return (
    <div className={s.wrapper}>
      <Header />
      <RoutesComponent />
    </div>
  )
}

export default App

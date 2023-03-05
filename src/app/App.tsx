import React from 'react'
import s from './App.module.scss'
import { RoutesComponent } from './routes/RoutesComponent'

function App() {
  return (
    <div className={s.wrapper}>
      <RoutesComponent />
    </div>
  )
}

export default App

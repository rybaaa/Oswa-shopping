import React from 'react'
import s from './App.module.scss'
import { RoutesComponent } from './routes/RoutesComponent'
import LinearProgress from '@mui/material/LinearProgress'
import { useAppSelector } from './store'
import { statusSelector } from './app-reducer'

function App() {
  const status = useAppSelector(statusSelector)
  return (
    <div className={s.wrapper}>
      {status === 'loading' && <LinearProgress color='secondary' />}
      <RoutesComponent />
    </div>
  )
}

export default App

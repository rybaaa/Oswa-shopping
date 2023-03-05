import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PATH } from './routes'
import { Home } from '../../components/Home/Home'

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path={PATH.MAIN} element={<Home />} />
      {/* <Route path={'*'} element={<Error404 />} />*/}
    </Routes>
  )
}

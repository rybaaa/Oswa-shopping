import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PATH } from './routes'
import { MainPage } from 'components/MainPage/MainPage'

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path={PATH.MAIN} element={<MainPage />} />
      {/* <Route path={'*'} element={<Error404 />} />*/}
    </Routes>
  )
}

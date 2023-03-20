import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { appReducer } from './app-reducer'
import { cartReducer } from '../features/cart/cart-reducer'

export const rootReducer = combineReducers({
  app: appReducer,
  cart: cartReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware),
})

export type RootStateType = ReturnType<typeof rootReducer>

export const useAppDispatch = () => useDispatch<AppThunk>()
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
// @ts-ignore
window.store = store

import { configureStore, Dispatch, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { AppActionsType, appReducer } from './app-reducer'
import { cartReducer } from '../features/cart/cart-reducer'
import { categoryReducer } from '../features/Category/category-reducer'

export const rootReducer = combineReducers({
  app: appReducer,
  cart: cartReducer,
  category: categoryReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware),
})

export type RootStateType = ReturnType<typeof rootReducer>

export const useAppDispatch = () => useDispatch<AppThunk>()
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector

export type ThunkAppDispatchType<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStateType,
  unknown,
  ActionsType
>
export type AppThunk = ThunkDispatch<RootStateType, unknown, ActionsType>

export type AsyncThunkConfig = {
  state?: unknown
  dispatch?: Dispatch
  extra?: unknown
  rejectValue?: unknown
  serializedErrorType?: unknown
  pendingMeta?: unknown
  fulfilledMeta?: unknown
  rejectedMeta?: unknown
}

export type ActionsType = AppActionsType

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { RootStateType } from 'app/store'
import { setSubmittingAC } from '../../app/app-reducer'
import { errorMessage } from '../../utils/error-util'
import { cartApi, ProductsInCartResponseType } from '../../api/cart-api'

type ProductsInCart = {
  products: ProductsInCartResponseType[]
  quantity: number
}

const initialState: ProductsInCart = {
  products: [],
  quantity: 0,
}

const slice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsInCartTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.products = action.payload
        state.quantity = action.payload.length
      }
    })
  },
})

export const cartReducer = slice.reducer

export const getProductsInCartTC = createAsyncThunk(
  'cart/getProductsInCart',
  async (_, { dispatch, rejectWithValue }) => {
    dispatch(setSubmittingAC({ status: 'loading' }))
    try {
      const response = await cartApi.getProducts()

      dispatch(setSubmittingAC({ status: 'success' }))

      return response.data
    } catch (e) {
      const error = e as Error | AxiosError

      return rejectWithValue(errorMessage(dispatch, error))
    }
  },
)

export const removeProductFromCartTC = createAsyncThunk(
  'cart/removeProductFromCart',
  async (id: string, { dispatch, rejectWithValue }) => {
    dispatch(setSubmittingAC({ status: 'loading' }))
    try {
      const response = await cartApi.removeProduct(id)

      dispatch(setSubmittingAC({ status: 'success' }))
      dispatch(getProductsInCartTC())

      return response.data
    } catch (e) {
      const error = e as Error | AxiosError

      return rejectWithValue(errorMessage(dispatch, error))
    }
  },
)

export const addProductToCartTC = createAsyncThunk(
  'cart/addProductToCart',
  async (param: { id: string; title: string }, { dispatch, rejectWithValue }) => {
    dispatch(setSubmittingAC({ status: 'loading' }))
    try {
      const response = await cartApi.addProduct(param.id, param.title)
      dispatch(setSubmittingAC({ status: 'success' }))
      dispatch(getProductsInCartTC())

      return response.data
    } catch (e) {
      const error = e as Error | AxiosError

      return rejectWithValue(errorMessage(dispatch, error))
    }
  },
)

// export const {} = slice.actions

export const productsInCartSelector = (state: RootStateType) => state.cart.products
export const productsQuantitySelector = (state: RootStateType) => state.cart.quantity

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { RootStateType } from 'app/store'
import { setSubmittingAC } from '../../app/app-reducer'
import { errorMessage } from '../../utils/error-util'
import { cartApi, ProductsInCartResponseType } from '../../api/cart-api'

type ProductsInCart = {
  products: ProductsInCartResponseType[]
}

const initialState: ProductsInCart = {
  products: [],
}

const slice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsInCartTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.products = action.payload
      }
    }),
      builder.addCase(removeProductFromCartTC.fulfilled, (state, action) => {
        if (action.payload) {
          state.products = action.payload
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
      console.log('test')

      dispatch(setSubmittingAC({ status: 'success' }))
      // dispatch(getProductsInCartTC())

      return response.data
    } catch (e) {
      const error = e as Error | AxiosError

      return rejectWithValue(errorMessage(dispatch, error))
    }
  },
)

// export const {} = slice.actions

export const productsInCartSelector = (state: RootStateType) => state.cart.products
export const productsQuantity = (state: RootStateType) => state.cart.products.length

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { setSubmittingAC } from '../../../app/app-reducer'
import { AxiosError } from 'axios'
import { errorMessage } from '../../../utils/error-util'
import { productsApi } from '../../../api/products-api'
import { RootStateType } from '../../../app/store'

type ProductsType = {
  title: string
  items: ProductItemType[]
}

export type ProductItemType = {
  id: string
  category: string
  title: string
  price: number
  sizes?: string[]
  currentSize?: string
  color?: string[]
  currentColor?: string
  quantity: number[]
  currentQuantity: number
  image: string
}

type ProductStateType = {
  products: ProductsType
  currentCategory: ProductsType
}

const initialState: ProductStateType = {
  products: {
    title: '',
    items: [],
  },
  currentCategory: {
    title: '',
    items: [],
  },
}

const slice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsTC.fulfilled, (state, action) => {
        if (action.payload) {
          state.products = action.payload
        }
      })
      .addCase(fetchAnyCategoryTC.fulfilled, (state, action) => {
        if (action.payload) {
          state.currentCategory = action.payload
        }
      })
  },
})

export const productsReducer = slice.reducer

export const fetchAllProductsTC = createAsyncThunk(
  'products/getAllProducts',
  async (_, { dispatch, rejectWithValue }) => {
    dispatch(setSubmittingAC({ status: 'loading' }))
    try {
      const response = await productsApi.fetchAllProducts()

      dispatch(setSubmittingAC({ status: 'success' }))

      return response.data
    } catch (e) {
      const error = e as Error | AxiosError

      return rejectWithValue(errorMessage(dispatch, error))
    }
  },
)

export const fetchAnyCategoryTC = createAsyncThunk(
  'products/fetchAnyCategory',
  async (title: string, { dispatch, rejectWithValue }) => {
    dispatch(setSubmittingAC({ status: 'loading' }))
    try {
      const response = await productsApi.fetchAnyCategory(title)

      dispatch(setSubmittingAC({ status: 'success' }))

      return response.data
    } catch (e) {
      const error = e as Error | AxiosError

      return rejectWithValue(errorMessage(dispatch, error))
    }
  },
)

export const currentCategorySelector = (state: RootStateType) => state.products.currentCategory

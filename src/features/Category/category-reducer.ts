import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { RootStateType } from 'app/store'
import { categoriesApi, CategoriesResponseType } from '../../api/categories-api'
import { setSubmittingAC } from '../../app/app-reducer'
import { errorMessage } from '../../utils/error-util'

type CategoriesType = {
  categories: CategoriesResponseType[]
}

const initialState: CategoriesType = {
  categories: [],
}

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoriesTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.categories = action.payload
      }
    })
  },
})

export const categoryReducer = slice.reducer

// export const {} = slice.actions

export const getCategoriesTC = createAsyncThunk(
  'categories/getCategories',
  async (_, { dispatch, rejectWithValue }) => {
    dispatch(setSubmittingAC({ status: 'loading' }))
    try {
      const response = await categoriesApi.getCategories()

      dispatch(setSubmittingAC({ status: 'success' }))

      return response.data
    } catch (e) {
      const error = e as Error | AxiosError

      return rejectWithValue(errorMessage(dispatch, error))
    }
  },
)

export const categoriesSelector = (state: RootStateType) => state.category.categories

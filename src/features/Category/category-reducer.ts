import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { RootStateType } from 'app/store'
import { categoriesApi, CategoriesResponseType } from '../../api/categories-api'
import { setSubmittingAC } from '../../app/app-reducer'
import { errorMessage } from '../../utils/error-util'

type CategoriesType = {
  categories: CategoriesResponseType[]
  search: string
  foundCategories: string[]
}

const initialState: CategoriesType = {
  categories: [],
  search: '',
  foundCategories: [],
}

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    changeSearchFieldAC(state, action: PayloadAction<{ title: string }>) {
      state.search = action.payload.title
    },
    clearFoundCategoriesAC(state) {
      state.foundCategories = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesTC.fulfilled, (state, action) => {
        if (action.payload) {
          state.categories = action.payload
        }
      })
      .addCase(searchForCategoriesTC.fulfilled, (state, action) => {
        if (action.payload) {
          console.log(action.payload)
          state.foundCategories = action.payload
        }
      })
  },
})

export const categoryReducer = slice.reducer

export const { changeSearchFieldAC, clearFoundCategoriesAC } = slice.actions

export type CategoriesActionsType =
  | ReturnType<typeof changeSearchFieldAC>
  | ReturnType<typeof clearFoundCategoriesAC>

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

export const searchForCategoriesTC = createAsyncThunk(
  'categories/searchForCategories',
  async (search: string, { dispatch, rejectWithValue }) => {
    dispatch(setSubmittingAC({ status: 'loading' }))
    dispatch(changeSearchFieldAC({ title: search }))
    try {
      console.log('rest')
      const response = await categoriesApi.searchForCategories(search)

      dispatch(setSubmittingAC({ status: 'success' }))

      return response.data
    } catch (e) {
      const error = e as Error | AxiosError

      return rejectWithValue(errorMessage(dispatch, error))
    }
  },
)

export const categoriesSelector = (state: RootStateType) => state.category.categories
export const searchSelector = (state: RootStateType) => state.category.search
export const foundCategoriesSelector = (state: RootStateType) => state.category.foundCategories

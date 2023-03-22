import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { AsyncThunkConfig, RootStateType } from 'app/store'
import { categoriesApi } from '../../api/categories-api'

const initialState = [{ id: '' as string, title: '' as string }]

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder.addCase(getCategoriesTC.fulfilled, (state, action) => {
  //     if (action.payload) {
  //       state = action.payload.data
  //     }
  //   })
  // },
})

export const categoryReducer = slice.reducer

// export const {} = slice.actions

export const getCategoriesTC = createAsyncThunk('categories/getCategories', async () => {
  // dispatch(setSubmittingAC({ status: 'loading' }))
  try {
    const response = await categoriesApi.getCategories()

    // dispatch(setSubmittingAC({ status: 'success' }))
    console.log(response.data)

    // return response.data
  } catch (e) {
    const error = e as Error | AxiosError
    alert(error)

    // return rejectWithValue(errorMessage(dispatch, error))
  }
})

type getCategoriesResponseType = {
  data: {
    id: string
    title: string
  }
}

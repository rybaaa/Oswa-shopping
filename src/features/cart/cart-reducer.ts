import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { RootStateType } from 'app/store'

const slice = createSlice({
  name: 'cart',
  initialState: {},
  reducers: {},
})

export const cartReducer = slice.reducer

// export const {} = slice.actions

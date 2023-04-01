import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { RootStateType } from 'app/store'

const slice = createSlice({
  name: 'cart',
  initialState: {},
  reducers: {},
})

export const cartReducer = slice.reducer

// const fetchProductsInCartTC = createAsyncThunk(
//     'cart/fetchProducts',
//     async () => {
//       const response = await fetch(`https://reqres.in/api/users/${userId}`)
//       // Inferred return type: Promise<MyData>
//       return (await response.json()) as MyData
//     }
// )

// export const {} = slice.actions

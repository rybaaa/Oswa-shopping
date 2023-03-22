import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { RootStateType } from 'app/store'

export type StatusType = 'idle' | 'loading' | 'success' | 'failed'

const initialState = {
  error: null as string | null,
  status: 'idle' as StatusType,
  isInitialized: false as boolean,
}

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
})

export const appReducer = slice.reducer

// export const {} = slice.actions

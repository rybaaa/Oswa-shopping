import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootStateType } from './store'

export type StatusType = 'idle' | 'loading' | 'success' | 'failed'

const initialState = {
  error: null as string | null,
  status: 'idle' as StatusType,
  isInitialized: false as boolean,
}

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setErrorAC(state, action: PayloadAction<{ error: string | null }>) {
      state.error = action.payload.error
    },
    setSubmittingAC(state, action: PayloadAction<{ status: StatusType }>) {
      state.status = action.payload.status
    },
    setAppInitializedAC(state, action: PayloadAction<{ isInitialized: boolean }>) {
      state.isInitialized = action.payload.isInitialized
    },
  },
})

export const appReducer = slice.reducer

export const { setErrorAC, setSubmittingAC, setAppInitializedAC } = slice.actions

export type AppActionsType =
  | ReturnType<typeof setErrorAC>
  | ReturnType<typeof setSubmittingAC>
  | ReturnType<typeof setAppInitializedAC>

export const statusSelector = (state: RootStateType) => state.app.status

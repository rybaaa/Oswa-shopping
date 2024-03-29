import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootStateType } from './store'

export type StatusType = 'idle' | 'loading' | 'success' | 'failed'

const initialState = {
  error: null as string | null,
  status: 'idle' as StatusType,
  isInitialized: false as boolean,
  isSearchFieldActive: false,
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
    setSearchFieldActiveAC(state, action: PayloadAction<{ isActive: boolean }>) {
      state.isSearchFieldActive = action.payload.isActive
    },
  },
})

export const appReducer = slice.reducer

export const { setErrorAC, setSubmittingAC, setAppInitializedAC, setSearchFieldActiveAC } =
  slice.actions

export type AppActionsType =
  | ReturnType<typeof setErrorAC>
  | ReturnType<typeof setSubmittingAC>
  | ReturnType<typeof setAppInitializedAC>
  | ReturnType<typeof setSearchFieldActiveAC>

export const statusSelector = (state: RootStateType) => state.app.status
export const isSearchFieldActiveSelector = (state: RootStateType) => state.app.isSearchFieldActive

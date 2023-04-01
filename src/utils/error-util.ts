import axios, { AxiosError } from 'axios'
import { Dispatch } from 'redux'

import { setErrorAC, setSubmittingAC } from 'app/app-reducer'

export const errorMessage = (dispatch: Dispatch, err: AxiosError | Error) => {
  if (axios.isAxiosError(err)) {
    const error = err as AxiosError<{ error: string }>

    const finalError = error.response ? error.response.data.error : err.message

    dispatch(setSubmittingAC({ status: 'failed' }))
    dispatch(setErrorAC({ error: finalError }))
  } else {
    dispatch(setSubmittingAC({ status: 'failed' }))
    dispatch(setErrorAC({ error: err.message }))
  }
}

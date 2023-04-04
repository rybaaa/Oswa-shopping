import React from 'react'

import MuiAlert, { AlertProps } from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

type SuccessSnackbarType = {
  open: boolean
  setOpen: (open: boolean) => void
  text: string
}

export const SuccessSnackbar = (props: SuccessSnackbarType) => {
  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
  })

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    props.setOpen(false)
  }

  return (
    <Snackbar open={props.open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
        {props.text}
      </Alert>
    </Snackbar>
  )
}

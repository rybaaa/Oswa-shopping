import React from 'react'
import s from './Title.module.scss'

type TitlePropsType = {
  title: string
  textColor: string
  width?: string
}

export const Title = (props: TitlePropsType) => {
  return (
    <div style={{ color: props.textColor, width: props.width }} className={s.title}>
      {props.title}
    </div>
  )
}

import React from 'react'
import s from './CustomSelect.module.scss'
import arrow from 'assets/arrow.svg'

type CustomSelectPropsType = {
  items: string[]
  title: string
}

export const CustomSelect = (props: CustomSelectPropsType) => {
  return (
    <div className={s.customSelectContainer}>
      <span className={s.customSelect__title}>{props.title}</span>
      <select className={s.customSelect}>
        <option value={'0'}>{props.items[0]}</option>
        <option value={'1'}>{props.items[1]}</option>
        <option value={'2'}>{props.items[2]}</option>
        <option value={'3'}>{props.items[3]}</option>
        <option value={'4'}>{props.items[4]}</option>
      </select>
      <div className={s.icon_container}>
        <img src={arrow} alt={'arrow'}></img>
      </div>
    </div>
  )
}

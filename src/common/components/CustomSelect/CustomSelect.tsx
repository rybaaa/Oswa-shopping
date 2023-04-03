import React from 'react'
import s from './CustomSelect.module.scss'
import arrow from 'assets/arrow.svg'

type CustomSelectPropsType = {
  items: string[] | number[]
  title: string
}

export const CustomSelect = (props: CustomSelectPropsType) => {
  return (
    <div className={s.customSelectContainer}>
      <span className={s.customSelect__title}>{props.title}</span>
      <select className={s.customSelect}>
        {props.items[0] && <option value={'0'}>{props.items[0]}</option>}
        {props.items[1] && <option value={'1'}>{props.items[1]}</option>}
        {props.items[2] && <option value={'2'}>{props.items[2]}</option>}
        {props.items[3] && <option value={'3'}>{props.items[3]}</option>}
        {props.items[4] && <option value={'3'}>{props.items[4]}</option>}
      </select>
      <div className={s.icon_container}>
        <img src={arrow} alt={'arrow'}></img>
      </div>
    </div>
  )
}

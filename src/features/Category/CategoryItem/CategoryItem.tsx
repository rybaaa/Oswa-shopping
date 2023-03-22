import React from 'react'
import s from './CategoryItem.module.scss'

type CategoryItemPropsType = {
  title: string
  image: string
}

export const CategoryItem = (props: CategoryItemPropsType) => {
  return (
    <div className={s.category}>
      <img className={s.image} src={props.image} alt={'category title'} />
      <h3 className={s.title}>{props.title}</h3>
    </div>
  )
}

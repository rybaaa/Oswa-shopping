import React from 'react'
import s from './CategoryItem.module.scss'

type CategoryItemPropsType = {
  item: string
}

export const CategoryItem = (props: CategoryItemPropsType) => {
  return <div className={s.category}>{props.item}</div>
}

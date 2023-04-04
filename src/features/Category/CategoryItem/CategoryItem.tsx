import React from 'react'
import s from './CategoryItem.module.scss'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../../app/routes/routes'

type CategoryItemPropsType = {
  title: string
  image: string
}

export const CategoryItem = (props: CategoryItemPropsType) => {
  const navigate = useNavigate()
  const goToProducts = () => {
    navigate(PATH.CATEGORY + `/${props.title}`)
  }
  return (
    <div onClick={goToProducts} className={s.category}>
      <img className={s.image} src={props.image} alt={'category title'} />
      <h3 className={s.title}>{props.title}</h3>
    </div>
  )
}

import React from 'react'
import s from './NewCollection.module.scss'
import bags from 'assets/bags.png'
import shoes from 'assets/shoes.png'
import sweater from 'assets/sweater.png'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../../../app/routes/routes'

export const NewCollection = () => {
  const navigate = useNavigate()
  const goToAnyCategory = (title: string) => {
    navigate(PATH.CATEGORY + `/${title}`)
  }
  return (
    <div className={s.newCollectionBlock}>
      <div onClick={() => goToAnyCategory('bags')} className={s.item}>
        <img src={bags} alt={'bags'} />
        <div className={s.title}>BAGS</div>
      </div>
      <div onClick={() => goToAnyCategory('shoes')} className={s.item}>
        <img src={shoes} alt={'shoes'} />
        <div className={s.title}>SHOES</div>
      </div>
      <div onClick={() => goToAnyCategory('clothes')} className={s.item}>
        <img src={sweater} alt={'sweater'} />
        <div className={s.title}>Sweater</div>
      </div>
    </div>
  )
}

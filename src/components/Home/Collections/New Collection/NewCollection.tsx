import React from 'react'
import s from './NewCollection.module.scss'
import bags from 'assets/bags.png'
import shoes from 'assets/shoes.png'
import sweater from 'assets/sweater.png'

export const NewCollection = () => {
  return (
    <div className={s.newCollectionBlock}>
      <div className={s.item}>
        <img src={bags} alt={'bags'} />
        <div className={s.title}>BAGS</div>
      </div>
      <div className={s.item}>
        <img src={shoes} alt={'shoes'} />
        <div className={s.title}>SHOES</div>
      </div>
      <div className={s.item}>
        <img src={sweater} alt={'sweater'} />
        <div className={s.title}>Sweater</div>
      </div>
    </div>
  )
}

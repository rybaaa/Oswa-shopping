import React from 'react'
import s from './Discount.module.scss'
import bags from 'assets/bags.png'
import shoes from 'assets/shoes.png'
import sweater from 'assets/sweater.png'
import girl from 'assets/girl.png'

export const Discount = () => {
  return (
    <div className={s.container}>
      <div className={s.leftBlock}>
        <h2 className={s.title}>Discount of all types clothes</h2>
        <span className={s.description}>
          Permanent offers on clothes <p>A large selection of the most beautiful</p> clothes that
          suit you
        </span>
        <div className={s.imageList}>
          <img className={s.image} src={bags} alt={'bags'} />
          <img className={s.image} src={shoes} alt={'shoes'} />
          <img className={s.image} src={sweater} alt={'sweater'} />
        </div>
      </div>
      <div className={s.rightBlock}>
        <img className={s.girlImage} src={girl} alt={'girl'} />
      </div>
    </div>
  )
}

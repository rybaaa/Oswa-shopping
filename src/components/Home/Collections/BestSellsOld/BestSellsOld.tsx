import React from 'react'
import s from './BestSellsOld.module.scss'
import bestsell from 'assets/bestsell.png'
import arrows from 'assets/arrows.svg'
import leftEffects from 'assets/leftGroupBestSells.png'
import rightEffects from 'assets/rightGroupBestSells.png'

export const BestSellsOld = () => {
  return (
    <div className={s.container}>
      <div className={s.leftBlock}>
        <img src={bestsell} alt={'image'} />
        <div className={s.effect1}>
          <img src={arrows} alt={'arrows'} />
        </div>
        <div className={s.effect1_1}>
          <img src={arrows} alt={'arrows'} />
        </div>
        <div className={s.noteBlock}>
          <div className={s.noteItems}>
            <div className={s.noteItem}>
              <span className={s.numbers}>2022</span>
              <span className={s.text}>All founded</span>
            </div>
            <div className={s.noteItemWithBorders}>
              <span className={s.numbers}>9090+</span>
              <span className={s.text}>Product sold</span>
            </div>
            <div className={s.noteItem}>
              <span className={s.numbers}>2022</span>
              <span className={s.text}>Best Reviews</span>
            </div>
          </div>
        </div>
      </div>
      <div className={s.rightBlock}>
        <h2 className={s.title}>Best Sell Since 2022</h2>
        <span className={s.description}>
          Here are the Best Sellers for the whole year in fashion, beauty and home decor! Our most
          popular products based on sales. Updated frequently.
        </span>
      </div>
      <div className={s.effect2}>
        <img src={leftEffects} alt={'effects'} />
      </div>
      <div className={s.effect3}>
        <img src={rightEffects} alt={'effects'} />
      </div>
    </div>
  )
}

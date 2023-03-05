import React from 'react'
import s from './Collections.module.scss'
import squares from 'assets/squares2.svg'
import { Title } from '../../../common/components/Title/Title'
import { NewCollection } from './New Collection/NewCollection'
import { BestSellsOld } from './BestSellsOld/BestSellsOld'

export const Collections = () => {
  return (
    <div className={s.container}>
      <div className={s.leftEffects}>
        <img src={squares} alt={'effects'} />
      </div>
      <div className={s.rightEffects}>
        <img src={squares} alt={'effects'} />
      </div>
      <div className={s.title}>
        <Title title={'New Collection'} textColor={'#000'} />
      </div>
      <span className={s.description}>
        Latest trends in clothing for women, men & kids. Find new arrivals, fashion catalogs,
        collections & lookbooks every week.
      </span>
      <NewCollection />
      <BestSellsOld />
    </div>
  )
}

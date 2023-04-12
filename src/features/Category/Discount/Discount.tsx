import React from 'react'
import s from './Discount.module.scss'
import bags from 'assets/bags.png'
import shoes from 'assets/shoes.png'
import sweater from 'assets/sweater.png'
import girl from 'assets/girl.png'
import make from 'assets/categories/makeupTitle.jpg'
import watch from 'assets/categories/watch.jpg'
import Fade from 'react-reveal/Fade'
import { PATH } from '../../../app/routes/routes'
import { useNavigate } from 'react-router-dom'

export const Discount = () => {
  const navigate = useNavigate()
  const goToAnyCategory = (title: string) => {
    navigate(PATH.CATEGORY + `/${title}`)
  }
  return (
    <div className={s.container}>
      <div className={s.leftBlock}>
        <Fade left cascade>
          <div>
            <h2 className={s.title}>Discount of all types clothes</h2>
            <span className={s.description}>
              Permanent offers on clothes <p>A large selection of the most beautiful</p> clothes
              that suit you
            </span>
          </div>
        </Fade>
        <div className={s.imageList}>
          <img
            onClick={() => {
              goToAnyCategory('bags')
            }}
            className={s.image}
            src={bags}
            alt={'bags'}
          />
          <img
            onClick={() => {
              goToAnyCategory('shoes')
            }}
            className={s.image}
            src={shoes}
            alt={'shoes'}
          />
          <img
            onClick={() => {
              goToAnyCategory('clothes')
            }}
            className={s.image}
            src={sweater}
            alt={'clothes'}
          />
          <img
            onClick={() => {
              goToAnyCategory('makeup')
            }}
            className={s.image}
            src={make}
            alt={'makeup'}
          />
          <img
            onClick={() => {
              goToAnyCategory('watch')
            }}
            className={s.image}
            src={watch}
            alt={'watch'}
          />
          <img
            onClick={() => {
              goToAnyCategory('clothes')
            }}
            className={s.image}
            src={sweater}
            alt={'sweater'}
          />
        </div>
      </div>
      <div className={s.rightBlock}>
        <img className={s.girlImage} src={girl} alt={'girl'} />
      </div>
    </div>
  )
}

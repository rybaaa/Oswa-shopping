import React from 'react'
import s from './MainPage.module.scss'
import zoom from 'assets/zoom.svg'
import pic from 'assets/pic.svg'
import squares from 'assets/squares.svg'
import squares2 from 'assets/squares2.svg'
import arrows from 'assets/arrows.svg'
import leftGroup from 'assets/groupLeft.png'
import rightGroup from 'assets/groupRight.png'
import curlyLine from 'assets/curlyLine.svg'
import { Header } from '../../../app/Header/Header'
import Fade from 'react-reveal/Fade'
import { useNavigate } from 'react-router-dom'
import { PATH } from 'app/routes/routes'

export const MainPage = () => {
  const navigate = useNavigate()
  const goToCategories = () => {
    navigate(PATH.CATEGORY)
  }
  return (
    <div className={s.wrapper}>
      <Header />
      <div className={s.curlyLine}>
        <img src={curlyLine} alt={'curly line'} />
      </div>
      <div className={s.leftEffects}>
        <img src={leftGroup} alt={'left effects'} />
      </div>
      <div className={s.rightEffects}>
        <img src={rightGroup} alt={'right effects'} />
      </div>
      <form className={s.input}>
        <input className={s.search} type={'text'} placeholder={'Search what you need'}></input>
        <img className={s.zoom} src={zoom} alt={'zoom'} />
      </form>
      <div className={s.mainBlock}>
        <Fade left>
          <div className={s.mainLeft}>
            <div className={s.title}>The Best Store To Shop Online ALL IN ONE</div>
            <div className={s.description}>
              Traditional Sourcing Brought Online. Find Quality Products & Contact Verified
              Suppliers! Reduce Costs With Factory Direct Sourcing. Low MOQ, OEM/ODM Available.
              Source Now!
            </div>
            <button onClick={goToCategories} className={s.btn}>
              Shop Now
            </button>
          </div>
        </Fade>
        <Fade right>
          <div className={s.mainRight}>
            <img src={pic} alt={'pic'} />
            <div className={s.effect}>
              <img src={squares2} alt={'effects'} />
            </div>
            <div className={s.effect2}>
              <img src={squares2} alt={'effects'} />
            </div>
            <div className={s.effect3}>
              <img src={squares} alt={'effects'} />
            </div>
            <div className={s.effect4}>
              <img src={arrows} alt={'effects'} />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}

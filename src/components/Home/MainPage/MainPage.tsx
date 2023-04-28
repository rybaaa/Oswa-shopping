import React, { ChangeEvent } from 'react'
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
import { useAppDispatch, useAppSelector } from '../../../app/store'
import { isSearchFieldActiveSelector, setSearchFieldActiveAC } from '../../../app/app-reducer'
import {
  changeSearchFieldAC,
  clearFoundCategoriesAC,
  foundCategoriesSelector,
  searchForCategoriesTC,
  searchSelector,
} from '../../../features/Category/category-reducer'

export const MainPage = () => {
  const isSearchFieldActive = useAppSelector(isSearchFieldActiveSelector)
  const search = useAppSelector(searchSelector)
  const foundCategories = useAppSelector(foundCategoriesSelector)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const goToCategories = () => {
    navigate(PATH.CATEGORY)
  }
  const setSearchFieldActive = () => {
    dispatch(setSearchFieldActiveAC({ isActive: true }))
  }
  const setSearchFieldInactive = () => {
    dispatch(setSearchFieldActiveAC({ isActive: false }))
  }
  const changeInputSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value) {
      dispatch(searchForCategoriesTC(e.currentTarget.value))
    } else {
      dispatch(changeSearchFieldAC({ title: '' }))
      dispatch(clearFoundCategoriesAC())
    }
  }
  const goToCategory = (title: string) => {
    navigate(`/category/${title}`)
    dispatch(changeSearchFieldAC({ title: '' }))
    dispatch(clearFoundCategoriesAC())
  }

  const dropdownItems = foundCategories.map((el, index) => (
    <div onMouseDown={() => goToCategory(el)} className={s.dropdown_item} key={index}>
      {el}
    </div>
  ))
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
        <input
          value={search}
          onChange={changeInputSearch}
          onClick={setSearchFieldActive}
          onBlur={setSearchFieldInactive}
          className={s.search}
          type={'text'}
          placeholder={'Search what you need'}
        ></input>
        {isSearchFieldActive && <div className={s.dropdown_content}>{dropdownItems}</div>}
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

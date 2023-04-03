import React from 'react'
import s from './ProductsItemInCart.module.scss'
import { CustomSelect } from '../../../common/components/CustomSelect/CustomSelect'
import remove from 'assets/remove.svg'
import { ProductsInCartResponseType } from '../../../api/cart-api'

type ProductsItemInCartPropsType = Omit<ProductsInCartResponseType, 'id'>

export const ProductsItemInCart = (props: ProductsItemInCartPropsType) => {
  const removeProduct = () => {
    confirm(`Do you really want to remove ${props.title}?`)
  }
  return (
    <div className={s.product}>
      <div className={s.product__image}>{<img src={props.image} alt={'product image'} />}</div>
      <div className={s.product__info}>
        <div className={s.product__info__chosen}>
          <h5 className={s.product__title}>{props.title}</h5>
          <div className={s.product__infoBlock}>
            <span className={s.product__item__title}>price</span>
            <span className={s.product__item__number}>{props.price}$</span>
          </div>
          <div className={s.product__infoBlock}>
            <span className={s.product__item__title}>quantity</span>
            <span className={s.product__item__number}>{props.currentQuantity}</span>
          </div>
          <div className={s.product__infoBlock}>
            <span className={s.product__item__title}>Total</span>
            <span className={s.product__item__number}>{props.price * props.currentQuantity}$</span>
          </div>
        </div>
        <div className={s.product__info__select}>
          <CustomSelect title={'Size'} items={props.sizes} />
          <CustomSelect title={'Quantity'} items={props.quantity} />
          {props.color && (
            <div className={s.product__info__color}>
              <span className={s.product__info_colorTitle}>color</span>
              <div
                style={{ backgroundColor: props.currentColor }}
                className={s.product__info__colorType}
              ></div>
            </div>
          )}
          <div onClick={removeProduct} className={s.iconRemove}>
            <img src={remove} alt={'remove product'} />
          </div>
        </div>
      </div>
    </div>
  )
}

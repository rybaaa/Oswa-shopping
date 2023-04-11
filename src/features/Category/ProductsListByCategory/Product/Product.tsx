import React from 'react'
import s from './Product.module.scss'
import Rating from '@mui/material/Rating'
import { useAppDispatch } from '../../../../app/store'
import { addProductToCartTC } from '../../../cart/cart-reducer'

type ProductType = {
  id: string
  title: string
  price: number
  sizes?: string[]
  currentSize?: string
  color?: string[]
  currentColor?: string
  quantity: number[]
  currentQuantity: number
  image: string
  category: string
}

export const Product = (props: ProductType) => {
  const dispatch = useAppDispatch()

  const addToCart = () => {
    dispatch(addProductToCartTC({ id: props.id, title: props.category }))
  }
  return (
    <div className={s.container}>
      <img className={s.product_image} src={props.image} alt={'product'} />
      <Rating name='no-value' value={null} />
      <span className={s.product_title}>{props.title}</span>
      <span className={s.product_price}>${props.price}</span>
      <div onClick={addToCart} className={s.btn_add}>
        ADD TO CART
      </div>
    </div>
  )
}

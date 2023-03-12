import React from 'react'
import { Header } from '../../app/Header/Header'
import { Footer } from '../../app/Footer/Footer'
import { ProductsItemInCart } from './ProductsListInCart/ProductsItemInCart'
import s from './Cart.module.scss'
import pajamaST from 'assets/productsInCart/pajamaST.png'
import pajamaODH from 'assets/productsInCart/pajama ODH.png'
import chanel from 'assets/productsInCart/chanel.png'
import mastercard from 'assets/payments/mastercard.png'
import visa from 'assets/payments/visa.png'
import paypal from 'assets/payments/paypal.png'

export type ProductsType = {
  id: number
  title: string
  price: number
  quantity: number
  size: string
  color: string
  image: string
}

export const Cart = () => {
  const products: ProductsType[] = [
    {
      id: 1,
      title: 'pajama ST',
      price: 140,
      quantity: 1,
      size: 'S',
      color: '#B17774',
      image: pajamaST,
    },
    {
      id: 2,
      title: 'pajama ODH',
      price: 120,
      quantity: 1,
      size: 'S',
      color: '#D4D0CF',
      image: pajamaODH,
    },
    {
      id: 3,
      title: 'perfume Chanel',
      price: 520,
      quantity: 1,
      size: '20ml',
      color: '#ED87CB',
      image: chanel,
    },
  ]
  const productsList = products.map((el) => (
    <ProductsItemInCart
      key={el.id}
      title={el.title}
      price={el.price}
      quantity={el.quantity}
      size={el.size}
      color={el.color}
      image={el.image}
    />
  ))
  const totalAmount = products.reduce((sum, curr) => sum + curr.price, 0)
  return (
    <div>
      <Header
        background={'linear-gradient(180.52deg, #FA90D6 -9.05%, rgba(96, 26, 73, 0.83) 107.41%)'}
      />
      <div className={s.container}>
        <div className={s.productsList__container}>
          <h3 className={s.title}>Products in the cart</h3>
          <div className={s.productsList}>{productsList}</div>
        </div>
        <div className={s.payment__container}>
          <div className={s.payment__shipping}>Ships to USA</div>
          <div className={s.payment__amount}>
            <span className={s.payment__title}>The total amount</span>
            <span className={s.payment__count}>{totalAmount}$</span>
          </div>
          <button
            onClick={() => {
              alert('The order was registered!')
            }}
            className={s.payment__btn}
          >
            Checkout
          </button>
          <span className={s.payment__accept}>Accept</span>
          <div className={s.payment__cardsList}>
            <img src={mastercard} alt={'mastercard'} />
            <img src={visa} alt={'visa'} />
            <img src={paypal} alt={'paypal'} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

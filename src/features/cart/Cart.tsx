import React, { useEffect } from 'react'
import { Header } from '../../app/Header/Header'
import { Footer } from '../../app/Footer/Footer'
import { ProductsItemInCart } from './ProductsListInCart/ProductsItemInCart'
import s from './Cart.module.scss'
import mastercard from 'assets/payments/mastercard.png'
import visa from 'assets/payments/visa.png'
import paypal from 'assets/payments/paypal.png'
import { useAppDispatch, useAppSelector } from '../../app/store'
import {
  getProductsInCartTC,
  productsInCartSelector,
  removeProductFromCartTC,
} from './cart-reducer'

export const Cart = () => {
  const dispatch = useAppDispatch()
  const products = useAppSelector(productsInCartSelector)

  const removeProduct = (id: string) => {
    dispatch(removeProductFromCartTC(id))
  }

  const productsList = products.map((el) => (
    <ProductsItemInCart
      key={el.id}
      id={el.id}
      title={el.title}
      price={el.price}
      quantity={el.quantity}
      currentQuantity={el.currentQuantity}
      sizes={el.sizes}
      color={el.color}
      currentColor={el.currentColor}
      image={el.image}
    />
  ))
  const totalAmount = products.reduce((sum, curr) => sum + curr.price, 0)

  useEffect(() => {
    dispatch(getProductsInCartTC())
  }, [])
  useEffect(() => {
    console.log('Products changed: ', products)
  }, [products])
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
          <button onClick={() => removeProduct(products[0].id)} className={s.payment__btn}>
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

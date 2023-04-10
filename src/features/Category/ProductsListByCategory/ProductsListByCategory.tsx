import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import s from './ProductsListByCategory.module.scss'
import { ErrorSnackbar } from '../../../common/components/error-snackbar/ErrorSnackbar'
import { Header } from '../../../app/Header/Header'
import { Footer } from '../../../app/Footer/Footer'
import { Product } from './Product/Product'
import { useAppDispatch } from '../../../app/store'
import { addProductToCartTC } from '../../cart/cart-reducer'

export const ProductsListByCategory = () => {
  const dispatch = useAppDispatch()
  const products = [
    {
      title: 'shoes',
      items: [
        {
          id: 1,
          title: 'Nike Air Jordan 6 retro black infrared',
          price: 450,
          sizes: ['39', '40', '41', '42', '43'],
          currentSize: '39',
          color: ['black', '#d7c6c6', 'red', 'green', 'blue'],
          currentColor: 'black',
          quantity: [1, 2, 3, 4, 5],
          currentQuantity: 1,
          image: 'https://i.imgur.com/jp2weP7.jpg',
        },
        {
          id: 2,
          title: 'Nike Air Jordan 1 retro high og volt gold',
          price: 320,
          sizes: ['39', '40', '41', '42', '43'],
          currentSize: '39',
          color: ['black', '#e58f06', 'red', 'green', 'blue'],
          currentColor: '#e58f06',
          quantity: [1, 2, 3, 4, 5],
          currentQuantity: 1,
          image: 'https://i.imgur.com/OU7jOCb.jpg',
        },
        {
          id: 3,
          title: 'Adidas shoes',
          price: 300,
          sizes: ['39', '40', '41', '42', '43'],
          currentSize: '39',
          color: ['black', '#b06f6f', 'red', 'green', 'blue'],
          currentColor: '#b06f6f',
          quantity: [1, 2, 3, 4, 5],
          currentQuantity: 1,
          image: 'https://i.imgur.com/N6p6xIx.jpg',
        },
        {
          id: 4,
          title: 'Puma men enzo 2',
          price: 280,
          sizes: ['39', '40', '41', '42', '43'],
          currentSize: '39',
          color: ['black', '#b06f6f', 'red', 'green', 'blue'],
          currentColor: 'black',
          quantity: [1, 2, 3, 4, 5],
          currentQuantity: 1,
          image: 'https://i.imgur.com/lxd6CaV.jpg',
        },
        {
          id: 5,
          title: 'Reebok Aztrek 96',
          price: 310,
          sizes: ['39', '40', '41', '42', '43'],
          currentSize: '39',
          color: ['black', '#e1c31f', 'red', 'green', 'blue'],
          currentColor: '#e1c31f',
          quantity: [1, 2, 3, 4, 5],
          currentQuantity: 1,
          image: 'https://i.imgur.com/jTbvOKt.jpg',
        },
      ],
    },
    {
      title: 'bags',
      items: [
        {
          id: 7,
          title: 'Balenciaga Hourglass S tote bag',
          price: 1200,
          color: ['black', '#d7c6c6', 'red', 'green', 'blue'],
          currentColor: 'black',
          quantity: [1, 2, 3, 4, 5],
          currentQuantity: 1,
          image: 'https://i.imgur.com/xUvrdKm.png',
        },
        {
          id: 8,
          title: 'Classic Easy Tote',
          price: 250,
          color: ['black', '#b43e06', 'red', 'green', 'blue'],
          currentColor: '#b43e06',
          quantity: [1, 2, 3, 4, 5],
          currentQuantity: 1,
          image: 'https://i.imgur.com/T4V92Fl.png',
        },
        {
          id: 9,
          title: 'Become - Orange',
          price: 240,
          color: ['black', '#fa0606', 'red', 'green', 'blue'],
          currentColor: '#fa0606',
          quantity: [1, 2, 3, 4, 5],
          currentQuantity: 1,
          image: 'https://i.imgur.com/hIbFGKx.png',
        },
        {
          id: 11,
          title: 'OVERNIGHTER BAG',
          price: 300,
          color: ['black', '#443f3f', 'red', 'green', 'blue'],
          currentColor: '#443f3f',
          quantity: [1, 2, 3, 4, 5],
          currentQuantity: 1,
          image: 'https://i.imgur.com/7V2qfZe.png',
        },
        {
          id: 12,
          title: 'Handbag Medium',
          price: 400,
          color: ['black', '#ab0029', 'red', 'green', 'blue'],
          currentColor: '#ab0029',
          quantity: [1, 2, 3, 4, 5],
          currentQuantity: 1,
          image: 'https://i.imgur.com/uS7eE6g.png',
        },
      ],
    },
    {
      title: 'clothes',
      items: [
        {
          id: 7,
          title: 'Balenciaga Hourglass S tote bag',
          price: 1200,
          color: ['black', '#d7c6c6', 'red', 'green', 'blue'],
          currentColor: 'black',
          quantity: [1, 2, 3, 4, 5],
          currentQuantity: 1,
          image: 'https://i.imgur.com/xUvrdKm.png',
        },
        {
          id: 8,
          title: 'Classic Easy Tote',
          price: 250,
          color: ['black', '#b43e06', 'red', 'green', 'blue'],
          currentColor: '#b43e06',
          quantity: [1, 2, 3, 4, 5],
          currentQuantity: 1,
          image: 'https://i.imgur.com/T4V92Fl.png',
        },
        {
          id: 9,
          title: 'Become - Orange',
          price: 240,
          color: ['black', '#fa0606', 'red', 'green', 'blue'],
          currentColor: '#fa0606',
          quantity: [1, 2, 3, 4, 5],
          currentQuantity: 1,
          image: 'https://i.imgur.com/hIbFGKx.png',
        },
        {
          id: 11,
          title: 'OVERNIGHTER BAG',
          price: 300,
          color: ['black', '#443f3f', 'red', 'green', 'blue'],
          currentColor: '#443f3f',
          quantity: [1, 2, 3, 4, 5],
          currentQuantity: 1,
          image: 'https://i.imgur.com/7V2qfZe.png',
        },
        {
          id: 12,
          title: 'Handbag Medium',
          price: 400,
          color: ['black', '#ab0029', 'red', 'green', 'blue'],
          currentColor: '#ab0029',
          quantity: [1, 2, 3, 4, 5],
          currentQuantity: 1,
          image: 'https://i.imgur.com/uS7eE6g.png',
        },
      ],
    },
  ]
  const { title } = useParams()
  const requiredProducts = products.find((pr) => pr.title === title)
  let productsList
  if (requiredProducts) {
    productsList = requiredProducts.items.map((it) => (
      <Product
        key={it.id}
        id={it.id}
        title={it.title}
        price={it.price}
        quantity={it.quantity}
        currentQuantity={it.currentQuantity}
        image={it.image}
      />
    ))
  } else productsList = null
  type exampleType = {
    id: string
    title: string
  }
  const example: exampleType = {
    id: '1',
    title: 'shoes',
  }
  useEffect(() => {
    dispatch(addProductToCartTC(example))
  }, [])
  return (
    <div className={s.container}>
      <ErrorSnackbar />
      <Header
        background={'linear-gradient(180.52deg, #FA90D6 -9.05%, rgba(96, 26, 73, 0.83) 107.41%)'}
      />
      <div className={s.category__item__wrapper}>
        <div className={s.category__item__headerBlock}>
          <h2 className={s.category__item__header}>{title}</h2>
          <p className={s.category__item__quantity}>0 items</p>
        </div>
        <div className={s.products__list}>{productsList}</div>
      </div>
      <Footer />
    </div>
  )
}

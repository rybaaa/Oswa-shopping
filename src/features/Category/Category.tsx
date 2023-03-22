import React, { useEffect } from 'react'
import { CategoryItem } from './CategoryItem/CategoryItem'
import s from './Category.module.scss'
import { Header } from '../../app/Header/Header'
import { Footer } from '../../app/Footer/Footer'
import { Discount } from './Discount/Discount'
import { images } from '../../assets/categories'
import { useAppDispatch } from '../../app/store'
import { getCategoriesTC } from './category-reducer'

type CategoriesType = {
  id: number
  title: string
  image: string
}

export const Category = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getCategoriesTC())
  }, [])
  const categories: CategoriesType[] = [
    { id: 1, title: 'Makeup', image: images.makeup },
    { id: 2, title: 'Shoes', image: images.shoes2 },
    { id: 3, title: 'Bags', image: images.bags },
    { id: 4, title: 'Clothes', image: images.clothes },
    { id: 5, title: 'Watch', image: images.watch },
    { id: 6, title: 'Accessories', image: images.accessories },
    { id: 7, title: 'Nails', image: images.nails },
    { id: 8, title: 'Lingerie', image: images.lingerie },
    { id: 9, title: 'Perfume', image: images.perfume },
    { id: 10, title: 'Pajama', image: images.pajama },
  ]
  const categoriesList = categories.map((el) => (
    <CategoryItem key={el.id} title={el.title} image={el.image} />
  ))
  return (
    <div className={s.container}>
      <Header
        background={'linear-gradient(180.52deg, #FA90D6 -9.05%, rgba(96, 26, 73, 0.83) 107.41%)'}
      />
      <Discount />
      <h2 className={s.title}>Categories in the store</h2>
      <div className={s.categories}>{categoriesList}</div>
      <Footer />
    </div>
  )
}

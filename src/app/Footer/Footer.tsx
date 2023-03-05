import React from 'react'
import s from './Footer.module.scss'
import logo from 'assets/logo.svg'
import git from 'assets/git.svg'
import linkedin from 'assets/linkedin.svg'
import tg from 'assets/tg.svg'
import { useFormik } from 'formik'
import * as yup from 'yup'

export const Footer = () => {
  const validationSchema = yup.object({
    email: yup.string().email('Invalid email address').required('Email is required'),
  })
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(`The message was sent to ${values.email}`)
    },
  })
  return (
    <div className={s.container}>
      <div className={s.footerBlock}>
        <div className={s.logoBlock}>
          <img src={logo} alt={'logo'} />
          <span className={s.description}>
            Oswa Shopping is a global retail marketplace that enables consumers from around the
            world to buy directly from manufacturers and distributors, and is dedicated to becoming
            a platform for worldwide merchants to sell locally and globally.
          </span>
        </div>
        <div className={s.contactsBlock}>
          <h2 className={s.title}>Contact us</h2>
          <div className={s.allContacts}>
            <p className={s.contacts}>Email: info@Oswoashopping-me.com</p>
            <p className={s.contacts}>location: Unit 7, Business Park 1</p>
            <p className={s.contacts}>Phone: +963 56 480 489</p>
            <p className={s.contacts}>WhatsApp: +963 56 480 489</p>
          </div>
        </div>
        <div className={s.socialsBlock}>
          <h2 className={s.title}>Follow us</h2>
          <div className={s.socialsImgs}>
            <a href={'https://github.com/rybaaa'} target={'_blank'} rel='noreferrer'>
              <img src={git} alt={'github'} />
            </a>
            <a
              href={'https://www.linkedin.com/in/anton-rybak-8babb6188/'}
              target={'_blank'}
              rel='noreferrer'
            >
              <img src={linkedin} alt={'linkedin'} />
            </a>
            <a href={'https://t.me/currentpos'} target={'_blank'} rel='noreferrer'>
              <img src={tg} alt={'telegram'} />
            </a>
          </div>
          <form className={s.form} onSubmit={formik.handleSubmit}>
            <input
              id={'email'}
              className={s.input}
              type={'email'}
              placeholder={'Enter your Email'}
              {...formik.getFieldProps('email')}
            ></input>
            <button type={'submit'} aria-hidden={true} className={s.btn}>
              Submit
            </button>
            {formik.touched.email && formik.errors.email && (
              <div className={s.error}>{formik.errors.email}</div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

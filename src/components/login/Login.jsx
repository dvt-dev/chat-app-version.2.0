import React from 'react';

import classNames from 'classnames/bind';
import styles from './login.module.scss';
const cx = classNames.bind(styles);

const Login = () => {
  return (
    <div className={cx('login')}>
      <div className={cx('login__container')}>
        <h2 className={cx('login__title')}>Đăng nhập</h2>
        <form className={cx('login__form')}>
          <div className={cx('form-group')}>
            <label 
              htmlFor='email' 
              className={cx('login-form__email-label')}>
              Email
            </label>
            <input 
              type='text' 
              placeholder='Nhập Email' 
              name='email' 
              className='login-form__email' />
          </div>
          <div className={cx('form-group')}>
            <label 
              htmlFor='password' 
              className={cx('login-form__password-label')}>
              Mật khẩu
            </label>
            <input 
              type='password' 
              placeholder='Nhập Mật khẩu' 
              name='password' 
              className='login-form__password' />
          </div>
          <button 
            type='submit' 
            className={cx('login-form__btn')}>Đăng nhập</button>
        </form>
        <div className={cx('login__options')}>
          <span className={cx('login__option')}>Quên mật khẩu?</span>
          <span className={cx('login__option')}>Đăng ký</span>
        </div>
      </div>
      <div className={cx('separator')}></div>
      <div className={cx('register__container')}>
        <h2 className={cx('register__title')}>Đăng ký</h2>
        <form className={cx('register__form')}>
          <label 
            htmlFor='avatar' 
            className={cx('register-form__avatar-label')}>
            <span className={cx('register-form__avatar-text')}>Chọn ảnh đại diện</span>
          </label>
          <input 
            type='file' 
            id='avatar' 
            className='register-form__avatar' />
          <div className={cx('form-group')}>
            <label 
              htmlFor='username' 
              className={cx('register-form__username-label')}>
              Tên đăng nhập
            </label>
            <input 
              type='text' 
              placeholder='Tên đăng nhập' 
              name='username' 
              className='register-form__username' />
          </div>
          <div className={cx('form-group')}>  
            <label 
              htmlFor='email' 
              className={cx('register-form__email-label')}>
              Email
            </label>
            <input 
              type='email' 
              placeholder='Email' 
              name='email' 
              className='register-form__email' />
          </div>
          <div className={cx('form-group')}>
            <label 
              htmlFor='password' 
              className={cx('register-form__password-label')}>
              Mật khẩu
            </label>
            <input 
              type='password' 
              placeholder='Mật khẩu' 
              name='password' 
              className='register-form__password' />
          </div>
          <button 
            type='submit' 
            className={cx('register-form__btn')}>Đăng ký</button>
        </form>
        <div className={cx('register__options')}>
          <span className={cx('register__option')}>Đã có tài khoản</span>
          <span className={cx('register__option')}>Đăng nhập</span>
        </div>
      </div>
    </div>
  )
}

export default Login
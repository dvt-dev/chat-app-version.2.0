import React from 'react'

import classNames from 'classnames/bind';
import styles from './detail.module.scss';

const cx = classNames.bind(styles);

const Detail = () => {
  return (
    <div className={cx('detail-container')}>Detail</div>
  )
}

export default Detail
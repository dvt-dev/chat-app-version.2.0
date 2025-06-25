import React from 'react';
import { RiEditBoxLine } from "react-icons/ri";

import classNames from 'classnames/bind';
import styles from './UserInfo.module.scss';

const cx = classNames.bind(styles);


const UserInfo = () => {
  return (
    <div className={cx('user-info-container')}>
      <div className={cx('user-info')}>
        <img className={cx('user-info__avatar')} src="https://www.svgrepo.com/show/382106/male-avatar-boy-face-man-user-9.svg" alt="user" />
        <h2 className={cx('user-info__name')}>Đỗ Văn Tuấn</h2>
      </div>
      <div className={cx('icons')}>
        <RiEditBoxLine size={24} />
      </div>

    </div>
  )
}

export default UserInfo
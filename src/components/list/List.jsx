import React from 'react';
import UserInfo from './userInfo/UserInfo';
import ChatList from './chatList/ChatList';

import classNames from 'classnames/bind';
import styles from './List.module.scss';
const cx = classNames.bind(styles);

const List = () => {
  return (
    <div className={cx('list-container')}>
      <UserInfo />
      <ChatList />
    </div>
  )
}

export default List
import React from 'react'

import classNames from 'classnames/bind';
import styles from './ChatList.module.scss';
const cx = classNames.bind(styles);

const ChatList = () => {
  return (
    <div className={cx('chat-list-container')}>ChatList</div>
  )
}

export default ChatList
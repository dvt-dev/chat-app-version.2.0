import React from 'react';

import classNames from 'classnames/bind';
import styles from './Chat.module.scss';

const cx = classNames.bind(styles);

const Chat = () => {
  return (
    <div className={cx('chat-container')}>Chat</div>
  )
}

export default Chat
import React from 'react';
import { GoSearch } from "react-icons/go";

import classNames from 'classnames/bind';
import styles from './ChatList.module.scss';
const cx = classNames.bind(styles);

const ChatList = () => {
  return (
    <div className={cx('chat-list-container')}>
      <div className={cx('search')}>
        <div className={cx('search-bar')}>
          <div className={cx('search-icon')}>
            <GoSearch size={24} />
          </div>
          <input type="text" placeholder="Tìm kiếm..." className={cx('search-input')} />
        </div>
      </div>
      <div className={cx('chat-list')}>
        <div className={cx('chat-item')}>
          <div className={cx('chat-item-avatar')}>
            <img src="https://www.svgrepo.com/show/382106/male-avatar-boy-face-man-user-9.svg" alt="user" />
          </div>
          <div className={cx('chat-item-info')}>
            <h2 className={cx('chat-item-info__name')}>Đỗ Văn Tuấn</h2>
            <p className={cx('chat-item-info__message')}>Hello</p>
          </div>
        </div>
        <div className={cx('chat-item')}>
          <div className={cx('chat-item-avatar')}>
            <img src="https://www.svgrepo.com/show/382106/male-avatar-boy-face-man-user-9.svg" alt="user" />
          </div>
          <div className={cx('chat-item-info')}>
            <h2 className={cx('chat-item-info__name')}>Đỗ Văn Tuấn</h2>
            <p className={cx('chat-item-info__message')}>Hello</p>
          </div>
        </div>
        <div className={cx('chat-item')}>
          <div className={cx('chat-item-avatar')}>
            <img src="https://www.svgrepo.com/show/382106/male-avatar-boy-face-man-user-9.svg" alt="user" />
          </div>
          <div className={cx('chat-item-info')}>
            <h2 className={cx('chat-item-info__name')}>Đỗ Văn Tuấn</h2>
            <p className={cx('chat-item-info__message')}>Hello</p>
          </div>
        </div>
        <div className={cx('chat-item')}>
          <div className={cx('chat-item-avatar')}>
            <img src="https://www.svgrepo.com/show/382106/male-avatar-boy-face-man-user-9.svg" alt="user" />
          </div>
          <div className={cx('chat-item-info')}>
            <h2 className={cx('chat-item-info__name')}>Đỗ Văn Tuấn</h2>
            <p className={cx('chat-item-info__message')}>Hello</p>
          </div>
        </div>
        <div className={cx('chat-item')}>
          <div className={cx('chat-item-avatar')}>
            <img src="https://www.svgrepo.com/show/382106/male-avatar-boy-face-man-user-9.svg" alt="user" />
          </div>
          <div className={cx('chat-item-info')}>
            <h2 className={cx('chat-item-info__name')}>Đỗ Văn Tuấn</h2>
            <p className={cx('chat-item-info__message')}>Hello</p>
          </div>
        </div>
        <div className={cx('chat-item')}>
          <div className={cx('chat-item-avatar')}>
            <img src="https://www.svgrepo.com/show/382106/male-avatar-boy-face-man-user-9.svg" alt="user" />
          </div>
          <div className={cx('chat-item-info')}>
            <h2 className={cx('chat-item-info__name')}>Đỗ Văn Tuấn</h2>
            <p className={cx('chat-item-info__message')}>Hello</p>
          </div>
        </div>
        <div className={cx('chat-item')}>
          <div className={cx('chat-item-avatar')}>
            <img src="https://www.svgrepo.com/show/382106/male-avatar-boy-face-man-user-9.svg" alt="user" />
          </div>
          <div className={cx('chat-item-info')}>
            <h2 className={cx('chat-item-info__name')}>Đỗ Văn Tuấn</h2>
            <p className={cx('chat-item-info__message')}>Hello</p>
          </div>
        </div>
        <div className={cx('chat-item')}>
          <div className={cx('chat-item-avatar')}>
            <img src="https://www.svgrepo.com/show/382106/male-avatar-boy-face-man-user-9.svg" alt="user" />
          </div>
          <div className={cx('chat-item-info')}>
            <h2 className={cx('chat-item-info__name')}>Đỗ Văn Tuấn</h2>
            <p className={cx('chat-item-info__message')}>Hello</p>
          </div>
        </div>
        
        
        
      </div>
    </div>
  )
}

export default ChatList
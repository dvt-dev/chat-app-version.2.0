import React, { useState } from 'react';

import {FaPhone, FaVideo, FaCircleInfo } from "react-icons/fa6";
import { MdAttachFile,  MdOutlineEmojiEmotions  } from "react-icons/md";
import { IoSend } from "react-icons/io5";

import EmojiPicker from 'emoji-picker-react';

import classNames from 'classnames/bind';
import styles from './Chat.module.scss';

const cx = classNames.bind(styles);

const Chat = () => {

  const [openEmoji, setOpenEmoji] = useState(false);

  return (
    <div className={cx('chat-container')}>
      <div className={cx('chat__header')}>
        <div className={cx('chat__header-info')}>
          <div className={cx('chat__header-avatar')}>
            <img src='https://www.svgrepo.com/show/382106/male-avatar-boy-face-man-user-9.svg' alt="" className={cx('chat__header-avatar-img')}></img>
          </div>
          <div className={cx('chat__header-name')}>
            <h4 className={cx('chat__header-name-text')}>Đỗ Văn Tuấn</h4>
          </div>
        </div>
        <div className={cx('chat__header-icons')}>
            <div className={cx('chat__header-icon')}>
              <FaPhone  size={20}/>
            </div>
            <div className={cx('chat__header-icon')}>
              <FaVideo size={20}  />
            </div>
            <div className={cx('chat__header-icon')}>
              <FaCircleInfo size={20} />
            </div>
          </div>
      </div>
      <div className={cx('messages-list')}>

      </div>
      <div className={cx('message-form')}>
        <div className={cx('message-form-container')}>
          <div className={cx('message-form__media-file')}>
            <input type="file" className={cx('message-form__media-file-input')}/>
            <button className={cx('message-form__media-file-btn')}>
              <MdAttachFile size={25} />
            </button>
          </div>
          <div className={cx('message-form__input')}>
            <input type="text" placeholder='Nhập tin nhắn...' className={cx('message-form__input-field')}/>
          </div>
          <div className={cx('message-form__emoji')}>
            <button className={cx('message-form__emoji-btn')} onClick={() => setOpenEmoji(prev => !prev)}>
              <MdOutlineEmojiEmotions  size={28} />
            </button>
              <EmojiPicker open={openEmoji}/>
          </div>
        </div>       
        <div className={cx('message-form__send')}>
          <button className={cx('message-form__send-btn')}>
            <IoSend size={30}/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Chat
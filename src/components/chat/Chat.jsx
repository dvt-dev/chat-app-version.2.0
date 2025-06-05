import React, { useEffect, useRef, useState } from 'react';

import {FaPhone, FaVideo, FaCircleInfo } from "react-icons/fa6";
import { MdAttachFile,  MdOutlineEmojiEmotions  } from "react-icons/md";
import { IoSend } from "react-icons/io5";

import EmojiPicker from 'emoji-picker-react';

import classNames from 'classnames/bind';
import styles from './Chat.module.scss';

const cx = classNames.bind(styles);

const Chat = () => {

  const [openEmoji, setOpenEmoji] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleEmojiClick = (emoji) => {
    console.log(emoji);
    setInputValue(prev => prev + emoji.emoji);
    setOpenEmoji(false);
  }

  const endMessageRef = useRef(null);

  // Scroll to the bottom of the messages list
  useEffect(() => {
    endMessageRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, []);

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
        <div className={cx('message', 'message--received')}>
          <div className={cx('message__avatar')}>
            <img src='https://anhcuoiviet.vn/wp-content/uploads/2022/11/avatar-dep-dang-yeu-nu-5.jpg' alt='message-avatar' className={cx('message__avatar-img')}></img>
          </div>
          <div className={cx('message__content')}>
            <p className={cx('message__text')}>How are you doing ?</p>
            <span className={cx('message__time')}>Đã sửi 10 phút trước</span>
          </div>
        </div>
        <div className={cx('message', 'message--sent')}>
          <div className={cx('message__content')}>
            <p className={cx('message__text')}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem minima commodi dolores laudantium totam, aspernatur magnam dicta dignissimos laborum laboriosam soluta incidunt reiciendis recusandae animi est assumenda saepe beatae et! </p>
            <span className={cx('message__time')}>Đã gửi 30 giây trước</span>
          </div>
        </div>    
        <div className={cx('message', 'message--received')}>
          <div className={cx('message__avatar')}>
            <img src='https://anhcuoiviet.vn/wp-content/uploads/2022/11/avatar-dep-dang-yeu-nu-5.jpg' alt='message-avatar' className={cx('message__avatar-img')}></img>
          </div>
          <div className={cx('message__content')}>
            <p className={cx('message__text')}>How are you doing ?</p>
            <span className={cx('message__time')}>Đã sửi 10 phút trước</span>
          </div>
        </div>
        <div className={cx('message', 'message--sent')}>
          <div className={cx('message__content')}>
            <p className={cx('message__text')}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem minima commodi dolores laudantium totam, aspernatur magnam dicta dignissimos laborum laboriosam soluta incidunt reiciendis recusandae animi est assumenda saepe beatae et! </p>
            <span className={cx('message__time')}>Đã gửi 30 giây trước</span>
          </div>
        </div>   
        <div className={cx('message', 'message--received')}>
          <div className={cx('message__avatar')}>
            <img src='https://anhcuoiviet.vn/wp-content/uploads/2022/11/avatar-dep-dang-yeu-nu-5.jpg' alt='message-avatar' className={cx('message__avatar-img')}></img>
          </div>
          <div className={cx('message__content')}>
            <p className={cx('message__text')}>How are you doing ?</p>
            <span className={cx('message__time')}>Đã sửi 10 phút trước</span>
          </div>
        </div>
        <div className={cx('message', 'message--sent')}>
          <div className={cx('message__content')}>
            <p className={cx('message__text')}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem minima commodi dolores laudantium totam, aspernatur magnam dicta dignissimos laborum laboriosam soluta incidunt reiciendis recusandae animi est assumenda saepe beatae et! </p>
            <span className={cx('message__time')}>Đã gửi 30 giây trước</span>
          </div>
        </div>   
        <div className={cx('message', 'message--received')}>
          <div className={cx('message__avatar')}>
            <img src='https://anhcuoiviet.vn/wp-content/uploads/2022/11/avatar-dep-dang-yeu-nu-5.jpg' alt='message-avatar' className={cx('message__avatar-img')}></img>
          </div>
          <div className={cx('message__content')}>
            <p className={cx('message__text')}>How are you doing ?</p>
            <span className={cx('message__time')}>Đã sửi 10 phút trước</span>
          </div>
        </div>
        <div className={cx('message', 'message--sent')}>
          <div className={cx('message__content')}>
            <p className={cx('message__text')}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem minima commodi dolores laudantium totam, aspernatur magnam dicta dignissimos laborum laboriosam soluta incidunt reiciendis recusandae animi est assumenda saepe beatae et! </p>
            <span className={cx('message__time')}>Đã gửi 30 giây trước</span>
          </div>
        </div>   
        <div className={cx('message', 'message--received')}>
          <div className={cx('message__avatar')}>
            <img src='https://anhcuoiviet.vn/wp-content/uploads/2022/11/avatar-dep-dang-yeu-nu-5.jpg' alt='message-avatar' className={cx('message__avatar-img')}></img>
          </div>
          <div className={cx('message__content')}>
            <p className={cx('message__text')}>How are you doing ?</p>
            <span className={cx('message__time')}>Đã sửi 10 phút trước</span>
          </div>
        </div>
        <div className={cx('message', 'message--sent')}>
          <div className={cx('message__content')}>
            <p className={cx('message__text')}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem minima commodi dolores laudantium totam, aspernatur magnam dicta dignissimos laborum laboriosam soluta incidunt reiciendis recusandae animi est assumenda saepe beatae et! </p>
            <span className={cx('message__time')}>Đã gửi 30 giây trước</span>
          </div>
        </div>   
        <div className={cx('message', 'message--received')}>
          <div className={cx('message__avatar')}>
            <img src='https://anhcuoiviet.vn/wp-content/uploads/2022/11/avatar-dep-dang-yeu-nu-5.jpg' alt='message-avatar' className={cx('message__avatar-img')}></img>
          </div>
          <div className={cx('message__content')}>
            <p className={cx('message__text')}>How are you doing ?</p>
            <span className={cx('message__time')}>Đã sửi 10 phút trước</span>
          </div>
        </div>
        <div className={cx('message', 'message--sent')}>
          <div className={cx('message__content')}>
            <p className={cx('message__text')}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem minima commodi dolores laudantium totam, aspernatur magnam dicta dignissimos laborum laboriosam soluta incidunt reiciendis recusandae animi est assumenda saepe beatae et! </p>
            <span className={cx('message__time')}>Đã gửi 30 giây trước</span>
          </div>
        </div>   
        <div className={cx('message', 'message--received')}>
          <div className={cx('message__avatar')}>
            <img src='https://anhcuoiviet.vn/wp-content/uploads/2022/11/avatar-dep-dang-yeu-nu-5.jpg' alt='message-avatar' className={cx('message__avatar-img')}></img>
          </div>
          <div className={cx('message__content')}>
            <p className={cx('message__text')}>How are you doing ?</p>
            <span className={cx('message__time')}>Đã sửi 10 phút trước</span>
          </div>
        </div>
        <div className={cx('message', 'message--sent')}>
          <div className={cx('message__content')}>
            <p className={cx('message__text')}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem minima commodi dolores laudantium totam, aspernatur magnam dicta dignissimos laborum laboriosam soluta incidunt reiciendis recusandae animi est assumenda saepe beatae et! </p>
            <span className={cx('message__time')}>Đã gửi 30 giây trước</span>
          </div>
        </div>   
        <div className={cx('message', 'message--received')}>
          <div className={cx('message__avatar')}>
            <img src='https://anhcuoiviet.vn/wp-content/uploads/2022/11/avatar-dep-dang-yeu-nu-5.jpg' alt='message-avatar' className={cx('message__avatar-img')}></img>
          </div>
          <div className={cx('message__content')}>
            <p className={cx('message__text')}>How are you doing ?</p>
            <span className={cx('message__time')}>Đã sửi 10 phút trước</span>
          </div>
        </div>
        <div className={cx('message', 'message--sent')}>
          <div className={cx('message__content')}>
            <p className={cx('message__text')}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem minima commodi dolores laudantium totam, aspernatur magnam dicta dignissimos laborum laboriosam soluta incidunt reiciendis recusandae animi est assumenda saepe beatae et! </p>
            <span className={cx('message__time')}>Đã gửi 30 giây trước</span>
          </div>
        </div>   
        <div className={cx('message', 'message--received')}>
          <div className={cx('message__avatar')}>
            <img src='https://anhcuoiviet.vn/wp-content/uploads/2022/11/avatar-dep-dang-yeu-nu-5.jpg' alt='message-avatar' className={cx('message__avatar-img')}></img>
          </div>
          <div className={cx('message__content')}>
            <p className={cx('message__text')}>How are you doing ?</p>
            <span className={cx('message__time')}>Đã sửi 10 phút trước</span>
          </div>
        </div>
        <div className={cx('message', 'message--sent')}>
          <div className={cx('message__content')}>
            <p className={cx('message__text')}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem minima commodi dolores laudantium totam, aspernatur magnam dicta dignissimos laborum laboriosam soluta incidunt reiciendis recusandae animi est assumenda saepe beatae et! </p>
            <span className={cx('message__time')}>Đã gửi 30 giây trước</span>
          </div>
        </div>   
        <div className={cx('message', 'message--received')}>
          <div className={cx('message__avatar')}>
            <img src='https://anhcuoiviet.vn/wp-content/uploads/2022/11/avatar-dep-dang-yeu-nu-5.jpg' alt='message-avatar' className={cx('message__avatar-img')}></img>
          </div>
          <div className={cx('message__content')}>
            <div className={cx('message__image')}>
              <img className={cx('message__image-img')} src='https://cdn-media.sforum.vn/storage/app/media/anh-dep-68.jpg' alt='message-image'></img>
            </div>
            <span className={cx('message__time')}>Đã sửi 10 phút trước</span>
          </div>
        </div>
        <div className={cx('message', 'message--sent')}>
          <div className={cx('message__content')}>
            <p className={cx('message__text')}> Hình ảnh avatar đẹp, cute dễ thương, ngầu thường được mọi người sử dụng để làm ảnh đại diện cho các trang mạng các nhân của mình trên nền tảng mạng xã hội. Điều này cũng phần nào thể hiện được tính cách, sở thích cá nhân của bản nhân. Vậy, hãy cùng Sforum khám phá ngay 101+ ảnh avatar cute dễ thương nhất thế giới nhé! </p>
            <span className={cx('message__time')}>Đã gửi 30 giây trước</span>
          </div>
          <div ref={endMessageRef} className={cx('end-message')}></div>
        </div>                   
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
            <input 
            type="text" 
            placeholder='Nhập tin nhắn...' 
            className={cx('message-form__input-field')} 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}/>
          </div>
          <div className={cx('message-form__emoji')}>
            <button className={cx('message-form__emoji-btn')} onClick={() => setOpenEmoji(prev => !prev)}>
              <MdOutlineEmojiEmotions  size={28} />
            </button>
            <div className={cx('message-form__emoji-picker')}>
              <EmojiPicker open={openEmoji} onEmojiClick={handleEmojiClick}/>
            </div>
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
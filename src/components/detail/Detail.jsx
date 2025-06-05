import React from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdOutlineFileDownload, MdLogout, MdReport    } from "react-icons/md";
import { FaMinusCircle, FaLock  } from "react-icons/fa";
import { LuMessageSquareOff } from "react-icons/lu";
import { FaClockRotateLeft } from "react-icons/fa6";

import classNames from 'classnames/bind';
import styles from './detail.module.scss';

const cx = classNames.bind(styles);

const Detail = () => {
  return (
    <div className={cx('detail-container')}>
      <div className={cx('room-info')}>
        <div className={cx('room-image')}>
          <img className={cx('room-image__img')} src="https://anhcuoiviet.vn/wp-content/uploads/2022/11/avatar-dep-dang-yeu-nu-5.jpg" alt="room-image" />
        </div>
        <h2 className={cx('room-name')}>Đỗ Văn Tuấn</h2>
      </div>
      <ul className={cx('room-options')}>
        <li className={cx('room-option')}>
          <h4 className={cx('room-option__title')}>
            Cài đặt
            <span className={cx('room-option__icon')}>
              <MdKeyboardArrowDown size={28} />
            </span>
          </h4>
        </li>
        <li className={cx('room-option')}>
          <h4 className={cx('room-option__title')}>
            Quyền riêng tư & hỗ trợ
            <span className={cx('room-option__icon')}>
              <MdKeyboardArrowDown size={28} />
            </span>
          </h4>
        </li>
        <li className={cx('room-option', 'room-option--media')}>
          <h4 className={cx('room-option__title')}>
            File phương tiện
            <span className={cx('room-option__icon')}>
              <MdKeyboardArrowUp size={28} />
            </span>
          </h4>
          <div className={cx('photo-list')}>
            <div className={cx('photo-item')}>
              <img className={cx('photo-item__img')} src="https://anhcuoiviet.vn/wp-content/uploads/2022/11/avatar-dep-dang-yeu-nu-5.jpg" alt="photo" />
              <span className={cx('photo-item__name')}>photo 1</span>
              <span className={cx('download-icon')}>
                <MdOutlineFileDownload size={32} />
              </span>
            </div>   
            <div className={cx('photo-item')}>
              <img className={cx('photo-item__img')} src="https://anhcuoiviet.vn/wp-content/uploads/2022/11/avatar-dep-dang-yeu-nu-5.jpg" alt="photo" />
              <span className={cx('photo-item__name')}>photo 1</span>
              <span className={cx('download-icon')}>
                <MdOutlineFileDownload size={32} />
              </span>
            </div>   
            <div className={cx('photo-item')}>
              <img className={cx('photo-item__img')} src="https://anhcuoiviet.vn/wp-content/uploads/2022/11/avatar-dep-dang-yeu-nu-5.jpg" alt="photo" />
              <span className={cx('photo-item__name')}>photo 1</span>
              <span className={cx('download-icon')}>
                <MdOutlineFileDownload size={32} />
              </span>
            </div>   
            <div className={cx('photo-item')}>
              <img className={cx('photo-item__img')} src="https://anhcuoiviet.vn/wp-content/uploads/2022/11/avatar-dep-dang-yeu-nu-5.jpg" alt="photo" />
              <span className={cx('photo-item__name')}>photo 1</span>
              <span className={cx('download-icon')}>
                <MdOutlineFileDownload size={32} />
              </span>
            </div>   
            <div className={cx('photo-item')}>
              <img className={cx('photo-item__img')} src="https://anhcuoiviet.vn/wp-content/uploads/2022/11/avatar-dep-dang-yeu-nu-5.jpg" alt="photo" />
              <span className={cx('photo-item__name')}>photo 1</span>
              <span className={cx('download-icon')}>
                <MdOutlineFileDownload size={32} />
              </span>
            </div>             
          </div>
        </li>
        <li className={cx('room-option', 'room-option--disappearing-messages')}>
          <h4 className={cx('room-option__title')}>           
            <span className={cx('room-option__icon')}>
              <FaClockRotateLeft  fontSize={24} />
            </span>
            Tin nhắn tự huỷ
          </h4>
        </li>
        <li className={cx('room-option', 'room-option--encryption')}>
          <h4 className={cx('room-option__title')}>           
            <span className={cx('room-option__icon')}>
              <FaLock  fontSize={24} />
            </span>
            Xác minh mã hoá đầu cuối
          </h4>
        </li>
        <li className={cx('room-option', 'room-option--report')}>
          <h4 className={cx('room-option__title')}>           
            <span className={cx('room-option__icon')}>
              <LuMessageSquareOff  fontSize={24} />
            </span>
            Hạn chế
          </h4>
        </li>
        <li className={cx('room-option', 'room-option--block')}>
          <h4 className={cx('room-option__title')}>           
            <span className={cx('room-option__icon')}>
              <FaMinusCircle fontSize={24} />
            </span>
            Chặn
          </h4>
        </li>        
      </ul>
      <div className={cx('room-option__button')}>
        <button className={cx('logout-button')}>
          <MdLogout fontSize={32}/>
          Đăng xuất
        </button>
      </div>
    </div>
  )
}

export default Detail
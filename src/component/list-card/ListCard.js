import React from 'react';
import './style.less'

const ListCard  = (props)=> {
    return (
      <div className='list-card-wrapper'>
        <div className='list-card-img'>
          <img src={require('../../assets/img/cityCard_02.jpg')} alt='卡片图片'/>
        </div>
        <div className="list-card-main">
          <h2 className='list-card-title'>
            公益·剪纸--剪出四季的色彩
          </h2>
          <div className='list-card-detail'>
            <p className='list-card-detail-item'>四季惠享,公益活动,长按点赞，等你哦！多的是你不知道的事情的事情四季惠享,公益活动,长按点赞，等你哦！多的是你不知道的事情的事情四季惠享,公益活动,长按点赞，等你哦！多的是你不知道的事情的事情四季惠享,公益活动,长按点赞，等你哦！多的是你不知道的事情的事情四季惠享,公益活动,长按点赞，等你哦！多的是你不知道的事情的事情</p>
          </div>
        </div>
      </div>
    );
};

export default ListCard;

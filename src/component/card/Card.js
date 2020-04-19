import React, {Component} from 'react';
import './style.less';

class Card extends Component {
  render() {
    return (
      <div className='card-wrapper'>
        <div className='card-item-left'>
          <div className='card-item-img'>
            <img src={require('../../assets/img/cityCard_01.jpg')} alt='图片'/>
          </div>
        </div>

        <div className='card-item-right'>
          <div className='card-item-header'>
            <span className='card-header-title'>公益课程·剪纸</span>
          </div>
          <div className='card-item-detail'>
            <span className='card-detail-item'>江干区教大家剪纸江干区教大家剪纸江干区教大家剪纸江干区教大家剪纸江干区教大家剪纸</span>
          </div>
          <div className='card-item-btn'>
            <span>现在报名</span>
          </div>
          <div className='card-item-time'>
            <span className='iconfont'>&#xe603;</span>
            <span className='card-time'>2020-04-08</span>
            <span className='card-time-symbol'>~</span>
            <span className='card-time'>2020-04-16</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

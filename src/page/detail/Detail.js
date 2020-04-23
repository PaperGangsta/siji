import React, {Component} from 'react';
import './style.less'
import {NavLink} from 'react-router-dom';
import RegisterForm from '../../component/register-form/RegisterForm';

class Detail extends Component {
  render() {
    return (
      <div className='detail-wrapper'>
        <div className='detail-title'>
          <h2>公益课程·剪纸</h2>
        </div>
        <div className='detail-main'>
          <div className='img-wrapper'>
            <img src={require('../../assets/img/cityCard_02.jpg')} alt='图片'/>
          </div>
          <div className='detail-text'>
            <p>江干区教大家剪纸江干区教大家剪纸江干区教大家剪纸江干区教大家剪纸江干区教大家剪纸江干区教大家剪纸江干区教区教大家剪纸江干区教大家剪纸江干区教大家剪纸江干区教大家剪纸江干区教大家剪纸江干区教大家剪纸江干区教大家剪纸江干区教大家剪纸</p>
          </div>
          <div className='detail-item-time'>
            <span>活动时间:</span>
            <span className='iconfont'>&#xe603;</span>
            <span className='detail-time'>2020-04-16</span>
          </div>
        </div>
        <div className='detail-register'>
          <div className='detail-register-title'>
            活动报名
          </div>
          <RegisterForm/>
        </div>
      </div>
    );
  }
}

export default Detail;

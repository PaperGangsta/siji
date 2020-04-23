import React, {Component} from 'react';
import './style.less';
import {Link} from 'react-router-dom';

class Card extends Component {

  constructor(props) {
    super(props);
    this.type = props.type;
  }

  render() {

    var content;
    var bgColor;
    if (this.type === 'history') {
      content = '查看详情';
      bgColor = {background: '#2980b9'};
    } else if (this.type === 'activity') {
      content = '现在报名';
      bgColor = {background: '#f1c40f'};
    }

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
          <Link to={`/${this.type}/1`}>
            <div className='card-item-btn' style={bgColor}>
              <span>{content}</span>
            </div>
          </Link>
          <div className='card-item-time'>
            <span className='iconfont'>&#xe603;</span>
            <span className='card-time'></span>
            <span className='card-time-symbol'></span>
            <span className='card-time'>2020-04-16</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

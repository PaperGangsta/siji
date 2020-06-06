import React, {Component, Fragment} from 'react';
import './style.less';
import {Link, withRouter} from 'react-router-dom';
import {BASE_IMG_URL} from '../../config/common';

class Card extends Component {

  constructor(props) {
    super(props);
    this.type = props.type;
  }

  render() {
    var content;
    var bgColor;
    const data = this.props.data;
    data.time = data.time.split(' ')[0];

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
            <img src={BASE_IMG_URL + data.image} alt='图片'/>
          </div>
        </div>

        <div className='card-item-right'>

          <div className='card-item-header'>
            <span className='card-header-title'>{data.title}</span>
          </div>

          <div className='card-item-detail'>
            <span className='card-detail-item'>{data.introduction}</span>
          </div>
          {/*<Link to={`/${this.type}/${data.id}`}>*/}
          <div>
            <div className='card-item-btn' onClick={() => this.props.history.push(`/${this.type}/${data.id}`, {data})}
                 style={bgColor}>
              <span>{content}</span>
            </div>
          </div>
          {/*</Link>*/}
          <div className='card-item-time'>
            <span className='iconfont'>&#xe603;</span>
            <span className='card-time'>{data.time}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Card);

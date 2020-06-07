import React, {Component} from 'react';
import RegisterForm from '../../component/register-form/RegisterForm';
import {BASE_IMG_URL} from '../../config/common';
import {Timeline, Tag} from 'antd';
import './style.less';

class Detail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: props.history.location.state.data
    };
  }


  render() {
    const {data} = this.state;
    let index = this.props.match.path;
    let style;
    index = index.split('/')[1];
    if (index === 'history') {
      style = {marginBottom: '1rem'};
    } else {
      style = {marginBottom: '0.5rem'};
    }
    return (
      <div className='detail-wrapper' style={style}>
        <div className='detail-title'>
          <h2>{data.title}</h2>
        </div>
        <div className='detail-main'>
          <div className='img-wrapper'>
            <img src={BASE_IMG_URL + data.image} alt='图片'/>
          </div>
          <div className='detail-text'>
            <div className='detail-tag'>
              <Timeline>
                <Timeline.Item color="green">{data.introduction}</Timeline.Item>
              </Timeline>
            </div>

            <p dangerouslySetInnerHTML={{__html: data.html}}/>
          </div>
          <div className='detail-item-time'>
            <span>活动时间:</span>
            <span className='iconfont'>&#xe603;</span>
            <span className='detail-time'>{data.time}</span>
          </div>
        </div>
        {index === 'activity' && (<div className='detail-register'>
          <div className='detail-register-title'>
            活动报名
          </div>
          <RegisterForm activityId={data.id}/>
        </div>)}

      </div>
    );
  }
}

export default Detail;

import React, {Component} from 'react';
import './style.less';
import Card from '../../component/card/Card';
import PageTitle from '../../component/page-title/PageTitle';

const pageTitle = {
  icon: '\ue64d',
  title: '精彩活动'
};
const activity = 'activity';

class Activity extends Component {
  render() {
    return (
      <div className='activity-wrapper'>
        <PageTitle pageTitle={pageTitle}/>
        <div className='activity-container'>
          <Card type={activity}/>
          <Card type={activity}/>
          <Card type={activity}/>
          <Card type={activity}/>
          <Card type={activity}/>
        </div>
      </div>
    );
  }
}

export default Activity;

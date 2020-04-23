import React, {Component} from 'react';
import './style.less';
import PageTitle from '../../component/page-title/PageTitle';
import Card from '../../component/card/Card';

const pageTitle = {
  icon: '\ue636',
  title: '历史活动'
};
const history = 'history';

class History extends Component {
  render() {
    return (
      <div className='activity-wrapper'>
        <PageTitle pageTitle={pageTitle}/>
        <div className='activity-container'>
          <Card type={history}/>
          <Card type={history}/>
          <Card type={history}/>
          <Card type={history}/>
          <Card type={history}/>
          <Card type={history}/>
        </div>
      </div>
    );
  }
}

export default History;

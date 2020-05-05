import React from 'react';
import './style.less';

const PageTitle = (props) => {
  return (
    <div className='page-title-wrapper'>
      <span className='page-title-item iconfont'>{props.pageTitle.icon}</span>
      <span className='page-title-item'>{props.pageTitle.title}</span>
    </div>
  );

};

export default PageTitle;

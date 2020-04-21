import React from 'react';
import './style.less';

const CommonFooter = (props) => {
  return (
    <div className='common-foot-wrapper'>
      <div className='common-foot-logo'>
        <div className='foot-logo-item'>
          <img src={require('../../assets/img/erweima.jpg')} alt='四季惠享'/>
        </div>
      </div>
      <div className='common-foot-logo'>
        <div className='foot-logo-item'>
          <img src={require('../../assets/img/dinggao.svg')} alt='四季惠享'/>
        </div>
      </div>
    </div>
  );

};

export default CommonFooter;

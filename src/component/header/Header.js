import React from 'react';
import './style.less';

const Header = (props) => {

  return (
    <div className='header-wrapper'>
      <div className='top-container'>
        {/*<div className='header-img-wrapper'>*/}
        {/*  <img  src={require('../../assets/img/logo.svg')}/>*/}
        {/*</div>*/}
        <span className="title">四季惠享</span>
      </div>
      {/*<div>*/}
      {/*  <Slider bannerList={bannerList}/>*/}
      {/*</div>*/}
    </div>
  );
};

export default Header;

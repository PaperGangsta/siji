import React from 'react';
import './style.less';

const Header = (props) => {

  // const bannerList = [
  //   {
  //     imgUrl: 'http://p1.music.126.net/kiU_7VBk-GLxt9NLN6gU-g==/109951164912464558.jpg'
  //   },
  //   {
  //     imgUrl: 'http://p1.music.126.net/HlJB7OIRF_XxaaOihsVHAg==/109951164911568353.jpg'
  //   },
  //   {
  //     imgUrl: 'http://p1.music.126.net/1b9YqBB8m8cJNYJIsx3zVw==/109951164911479360.jpg'
  //   }
  // ];

  return (
    <div className='header-wrapper'>
      <div className='top-container'>
        {/*<div className='header-img-wrapper'>*/}
        {/*  <img  src={require('../../assets/img/siji_logo.jpg')}/>*/}
        {/*</div>*/}
        <span className='menu-icon iconfont' onClick={()=>props.changeNavShow()}>&#xeaf1;</span>
        <span className="title">四季惠享</span>
      </div>
      {/*<div>*/}
      {/*  <Slider bannerList={bannerList}/>*/}
      {/*</div>*/}
    </div>

  );
};

export default Header;

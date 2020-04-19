import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './style.less';

class LeftNav extends Component {

  render() {
    let activity;
    if(this.props.navShow){
      activity = {transform: "translateX(0%)"}
    }
    else{
      activity = {};
    }

    return (
      <div className='left-nav-wrapper' style={activity}>
        <div className='left-nav-title'>
          <span className='nav-title-icon iconfont' onClick={()=>this.props.changeNavShow()}>&#xe617;</span>
          <span className='nav-title-item'>四季惠享</span>
        </div>
        <div className='left-nav-label'>
          <span className='nav-label-icon iconfont'>&#xe6d3;</span>
          <div className='nav-label-down'>
            <span className='nav-label-item'>联盟空间</span>
            <span className='nav-label-back iconfont'>&#xe658;</span>
          </div>
        </div>
        <div className='left-nav-label'>
          <span className='nav-label-icon iconfont'>&#xe64d;</span>
          <div className='nav-label-down'>
            <span className='nav-label-item'>精彩活动</span>
            <span className='nav-label-back iconfont'>&#xe658;</span>
          </div>
        </div>
        <div className='left-nav-label'>
          <span className='nav-label-icon iconfont'>&#xe63a;</span>
          <div className='nav-label-down'>
            <span className='nav-label-item'>教育咨询</span>
            <span className='nav-label-back iconfont'>&#xe658;</span>
          </div>
        </div>
      </div>
    );
  }
}

LeftNav.propTypes={
  navShow: PropTypes.bool,
  changeNavShow:PropTypes.func
};

export default LeftNav;

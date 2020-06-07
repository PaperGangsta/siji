import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './style.less';

class FooterNav extends Component {

  state = {
    showList: 0
  };

  changeShowList = (num) => {
    if (this.state.showList > 0) {
      this.setState({
        showList: 0
      });
    } else {
      this.setState({
        showList: num
      });
    }
  };

  render() {
    return (
      <div className='footer-nav-wrapper'>
        <div className='footer-nav-item' onClick={() => this.changeShowList(1)}>
          <div className='footer-nav-tag'>
            <span className='footer-nav-icon iconfont'>&#xeaf1;</span>
            <div className='footer-nav-item-tag'>
              联盟空间
            </div>
          </div>
          {this.state.showList === 1 && (<div className='footer-nav-list'>
            <NavLink to='/term'>
              <div className='footer-nav-list-label'><span>主培项目</span></div>
            </NavLink>
            <NavLink to='/'>
              <div className='footer-nav-list-label'><span>联盟简介</span></div>
            </NavLink>
          </div>)
          }
        </div>

        <div className='footer-nav-item' onClick={() => this.changeShowList(2)}>
          <div className='footer-nav-tag'>
            <span className='footer-nav-icon iconfont'>&#xeaf1;</span>
            <div className='footer-nav-item-tag'>
              活动内容
            </div>
          </div>
          {this.state.showList === 2 && (
            <div className='footer-nav-list'>
              <NavLink to='/history'>
                <div className='footer-nav-list-label'><span>历史活动</span></div>
              </NavLink>
              <NavLink to='/activity'>
                <div className='footer-nav-list-label'><span>精彩活动</span></div>
              </NavLink>
            </div>)
          }
        </div>

        <div className='footer-nav-item' onClick={() => this.changeShowList(3)}>
          <div className='footer-nav-tag'>
            <span className='footer-nav-icon iconfont'>&#xeaf1;</span>
            <div className='footer-nav-item-tag'>
              教育咨询
            </div>
          </div>
          {this.state.showList === 3 && (<div className='footer-nav-list'>
            <NavLink to='/question'>
              <div className='footer-nav-list-label'><span>常见问题</span></div>
            </NavLink>
            <NavLink to='/chat'>
              <div className='footer-nav-list-label'><span>在线咨询</span></div>
            </NavLink>
            <NavLink to='/opinion'>
              <div className='footer-nav-list-label'><span>意见箱</span></div>
            </NavLink>
          </div>)}
        </div>

      </div>
    );
  }
};


export default FooterNav;

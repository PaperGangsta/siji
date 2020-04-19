import React, {Component} from 'react';
import Header from '../../component/header/Header';
import {Redirect, Route, Switch, NavLink} from 'react-router-dom';
import Home from '../home/Home';
import Activity from '../activity/Activity';
import Advisory from '../advisory/Advisory';
import './style.less';
import LeftNav from '../../component/left-nav/LeftNav';
import {Tag} from 'antd';
import {imgIndex} from '../../api/config';

class Container extends Component {

  state = {
    navShow: false
  };

  changeNavShow = () => {
    if (this.state.navShow) {
      this.setState({
        navShow: false
      });
    } else {
      this.setState({
        navShow: true
      });
    }
  };

  render() {
    let title = '主培项目';
    switch (this.props.location.pathname) {
      case '/home':
        title = '主培项目';
        break;
      case '/activity':
        title = '最近活动';
        break;
      case '/advisory':
        title = '热心问答';
        break;
      default:
        title = '主培项目';
    }
    return (
      <div className='container-wrapper'>
        <Header changeNavShow={this.changeNavShow}/>
        <LeftNav navShow={this.state.navShow} changeNavShow={this.changeNavShow}/>
        <div className='container-body'>
          {/*<div className='tab'>*/}
          {/*  <NavLink to="/home" activeClassName="selected"><div className='tab-item' ><span > 联盟空间 </span></div></NavLink>*/}
          {/*  <NavLink to="/activity" activeClassName="selected"><div className='tab-item'><span > 精彩活动 </span></div></NavLink>*/}
          {/*  <NavLink to="/advisory" activeClassName="selected"><div className='tab-item'><span> 教育咨询 </span></div></NavLink>*/}
          {/*</div>*/}
          {/*<div className='container-title'>*/}
          {/*  <span className='container-title-item'>{title}</span>*/}
          {/*</div>*/}
          {/*<Switch>*/}
          {/*  <Route path='/home' component={Home}/>*/}
          {/*  <Route path='/activity' component={Activity}/>*/}
          {/*  <Route path='/advisory' component={Advisory}/>*/}
          {/*  <Redirect from='/' exact to='/home'/>*/}
          {/*</Switch>*/}
          <div className='container-body-title'>
            <div className='container-title-img'>
              <img src={require('../../assets/img/logo.png')}/>
            </div>
            <div className='container-title-text'>
              <p className='container-title-text-item'>四季惠享公益联盟</p>
            </div>
          </div>

          <div className='split-line'/>

          <div className='container-main'>
            <div className='main-item'>
              <div className='main-title'><span>会议召开</span></div>
              <div className='main-text-wrapper'>
                <p>2020年1月15日，杭州市江干区四季青街道四季惠享公益联盟成立大会暨校外培训机构规范办学与生态发展工作会议顺利召开。“四季·爱在春天”公益联盟项目也正式启动。</p>
                <p>四季惠享公益联盟的成立旨在倡导校外培训机构自律自治，机构间实现互帮互助、互相监督，共建共享良好的教育生态环境。</p>
              </div>
            </div>

            <div className='main-item'>
              <div className='main-title'><span>参会成员</span></div>
              <div className='main-text-wrapper'>
                <p>本次参与会议的领导有四季青街道办事处副主任陈文飞；江干区教育局教育二科周惠新；江干区卫健局妇计中心主任刘彬彬；江干消防大队余龙冠；市场监管局钱江新城所副所长金岚；四季青派出所副所长付东海。</p>
                <p>另外还有四季青街道四大中心负责人；四季惠享服务中心负责人、各社区民生站站长、辖区各校外培训机构负责人。</p>
              </div>
            </div>

            <div className='main-item'>
              <div className='main-title'><span>会场掠影</span></div>
              <div className='main-title-second'>
                <Tag color="green">Tips : 点击照片查看摘要哦~</Tag>
              </div>
              <div className='main-text-wrapper'>
                {imgIndex.map((item, index) => {
                  return (
                    <div className='main-img-wrapper' key={item.img}>
                      <div className='main-img'>
                        <img src={require(`../../assets/img/${item.img}.jpg`)} alt='会场图片'/>
                      </div>
                      <div className='main-img-detail'>
                        <span className='main-img-detail-item iconfont'>&#xe62b;</span>
                        <span className='main-img-detail-item'>{item.detail}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
        <div className='container-foot'>
          {/*<div className='container-logo'>*/}
          {/*  <div className='logo-item'>*/}
          {/*    <img  src={require('../../assets/img/siji_logo.jpg')}/>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className='container-logo'>*/}
          {/*  <div className='logo-item'>*/}
          {/*    <img  src={require('../../assets/img/siji_logo.jpg')}/>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
        {this.state.navShow === true ?
          <div onClick={() => this.changeNavShow()} className='shadow-wrapper shadow-wrapper-visible'/> :
          <div className='shadow-wrapper'/>}
      </div>

    );
  }
}

export default Container;

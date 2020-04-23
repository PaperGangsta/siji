import React, {Component} from 'react';
import './style.less';
import {Tag} from 'antd';
import {imgIndex} from '../../api/config';
import CommonFooter from '../../component/common-footer/CommonFooter';


class About extends Component {


  render() {
    return (
      <div className='about-wrapper'>
        <div className='about-body'>
          {/*<div className='tab'>*/}
          {/*  <NavLink to="/home" activeClassName="selected"><div className='tab-item' ><span > 联盟空间 </span></div></NavLink>*/}
          {/*  <NavLink to="/activity" activeClassName="selected"><div className='tab-item'><span > 精彩活动 </span></div></NavLink>*/}
          {/*  <NavLink to="/advisory" activeClassName="selected"><div className='tab-item'><span> 教育咨询 </span></div></NavLink>*/}
          {/*</div>*/}
          {/*<div className='about-title'>*/}
          {/*  <span className='about-title-item'>{title}</span>*/}
          {/*</div>*/}
          {/*<Switch>*/}
          {/*  <Route path='/home' component={Home}/>*/}
          {/*  <Route path='/activity' component={Activity}/>*/}
          {/*  <Route path='/advisory' component={Advisory}/>*/}
          {/*  <Redirect from='/' exact to='/home'/>*/}
          {/*</Switch>*/}
          <div className='about-body-title'>
            <div className='about-title-img'>
              <img src={require('../../assets/img/logo_wuzi.png')} alt='logo'/>
            </div>
            <div className='about-title-text'>
              <p className='about-title-text-item'>四季惠享公益联盟</p>
            </div>
          </div>
          <div className='about-main'>
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
                <Tag color="green">Tips : 精彩的现在重现给你~</Tag>
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

            <div className='main-item'>
              <div className='main-title'><span>惠享·未来</span></div>
              <div className='main-text-wrapper'>
                <p>四季惠享公益联盟成立后，将成为政府和广大校外培训机构之间的桥梁纽带，发挥服务、协调、监督作用，推动行业自律，优化市场环境，提供优质服务。</p>
                <p>联盟也是四季青街道辖区内各校外培训机构的共同家园，联盟在协助街道完成监督规范办学的同时，也将努力为机构提供有益的指导，共建发展的平台。</p>
              </div>
            </div>

          </div>
        </div>
        <CommonFooter/>
      </div>
    );
  }
}

export default About;

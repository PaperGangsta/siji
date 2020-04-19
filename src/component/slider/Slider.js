import React, {Component} from 'react';
import 'swiper/css/swiper.min.css';
import Swiper from 'swiper/js/swiper';
import './style.less';

class Slider extends Component {

  constructor(props) {
    super(props);
    this.bannerList = props.bannerList;

  }

  componentDidMount() {
    new Swiper(this.swiperID, {
      direction: 'horizontal',//竖向轮播
      loop: true,//无缝轮播
      pagination: {//小圆点分页
        el:  this.paginateID,
      }
    });
  }

  render() {
    return (
      <div className='slider-container-wrapper'>
        <div className="before"/>
        <div className='slider-container'  ref={self => this.swiperID = self}>
          <div className="swiper-wrapper">
            {
              this.bannerList.map((item,index) => {
                console.log(item);
                return (
                  <div className="swiper-slide" key={index}>
                    <div className="slider-nav">
                      <img src={item.imgUrl} width="100%" height="100%" alt="推荐"/>
                    </div>
                  </div>
                );
              })
            }
          </div>
          <div className="swiper-pagination" ref={self => this.paginateID = self}/>
        </div>
      </div>

    );
  }
};

export default Slider;

import React, {Component} from 'react';
import PageTitle from '../../component/page-title/PageTitle';
import {waterFall} from '../../api/config';
import {Card} from 'antd';
import './style.less';

const {Meta} = Card;

const pageTitle = {
  icon: '\ue6d3',
  title: '主培项目'
};


class Term extends Component {

  render() {

    var data1 = [], data2 = [], i = 0;
    while (i < waterFall.length) {
      data1.push(waterFall[i++]);
      if (i < waterFall.length) {
        data2.push(waterFall[i++]);
      }
    }

    return (
      <div className='term-wrapper'>
        <PageTitle pageTitle={pageTitle}/>
        <div className='term-container'>
          <div className='wall-container'>
            <ul className='waterfall-list'>
              <li className='waterfall-list-column'>
                {
                  data1.map((item, index) => {
                    return (
                      <Card
                        className='fall-card'
                        key={item.id}
                        hoverable
                        cover={<img src={require(`../../assets/img/${item.img}`)}/>}
                      >
                        <Meta title={item.title} description={item.detail}/>
                      </Card>
                    );
                  })
                }
              </li>
              <li className='waterfall-list-column'>
                {
                  data2.map((item, index) => {
                    return (
                      <Card
                        className='fall-card'
                        key={item.id}
                        hoverable
                        cover={<img src={require(`../../assets/img/${item.img}`)}/>}
                      >
                        <Meta title={item.title} description={item.detail}/>
                      </Card>
                    );
                  })
                }
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Term;

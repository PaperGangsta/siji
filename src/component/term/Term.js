import React, {Component} from 'react';
import PageTitle from '../page-title/PageTitle';
import './style.less';

const pageTitle = {
  icon: '\ue6d3',
  title: '主培项目'
};

class Term extends Component {
  render() {
    return (
      <div className='term-wrapper'>
        <PageTitle pageTitle={pageTitle}/>
        <div className='term-container'>
          <div className='wall-container'>
            <ul className='waterfall-list'>
              <li className='waterfall-list-column'></li>
              <li className='waterfall-list-column'></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Term;

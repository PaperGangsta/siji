import React, {Component} from 'react';
import './style.less'
import ListCard from '../../component/list-card/ListCard';

class Home extends Component {
  render() {
    return (
      <div className='home-wrapper'>
        <div className='home-container'>
          <ListCard/>
          <ListCard/>
          <ListCard/>
        </div>
      </div>
    );
  }
}

export default Home;

import React, {Component} from 'react';
import './style.less'
import Card from '../../component/card/Card';
import {NavLink} from 'react-router-dom';
class Activity extends Component {
  render() {
    return (
      <div className='activity-wrapper'>
        <div className='activity-container'>
          <NavLink to="/detail/1"><Card/></NavLink>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    );
  }
}

export default Activity;

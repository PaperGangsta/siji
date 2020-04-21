import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import About from './page/about/About';
import Detail from './page/detail/Detail';
import Activity from './page/activity/Activity';
import Advisory from './page/advisory/Advisory';
import Header from './component/header/Header';
import CommonFooter from './component/common-footer/CommonFooter';
import FooterNav from './component/footer-nav/FooterNav';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header changeNavShow={this.changeNavShow}/>
          <Switch>
            <Route path='/detail' component={Detail}/>
            <Route path='/' component={About}/>
            <Route path='/home' component={About}/>
            <Route path='/activity' component={Activity}/>
            <Route path='/advisory' component={Advisory}/>
            {/*      <Redirect from='/' exact to='/home'/>*/}
          </Switch>
          <CommonFooter/>
          <FooterNav/>
        </BrowserRouter>
      </div>
    );
  }
}


import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import About from './page/about/About';
import Detail from './page/detail/Detail';
import Activity from './page/activity/Activity';
import Advisory from './page/advisory/Advisory';
import Header from './component/header/Header';
import FooterNav from './component/footer-nav/FooterNav';
import ScrollToTop from './component/scroll-to-top/ScrollToTop';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header changeNavShow={this.changeNavShow}/>
          <ScrollToTop>
            <Switch>
              <Route path='/detail' component={Detail}/>
              <Route path='/activity/:id' component={Detail}/>
              <Route path='/activity' component={Activity}/>
              <Route path='/advisory' component={Advisory}/>
              <Route path='/' component={About}/>
              {/*      <Redirect from='/' exact to='/home'/>*/}
            </Switch>
          </ScrollToTop>
          <FooterNav/>
        </BrowserRouter>
      </div>
    );
  }
}


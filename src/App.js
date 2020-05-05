import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import About from './page/about/About';
import Detail from './page/detail/Detail';
import Activity from './page/activity/Activity';
import Advisory from './page/advisory/Advisory';
import Header from './component/header/Header';
import FooterNav from './component/footer-nav/FooterNav';
import ScrollToTop from './component/scroll-to-top/ScrollToTop';
import History from './page/history/History';
import Term from './component/term/Term';
import Question from './page/question/Question';
import Opinion from './page/opinion/Opinion';

export default class App extends Component {
  render() {
    return (
      <div className='app-wrapper'>
        <BrowserRouter>
          <ScrollToTop>
            <Header changeNavShow={this.changeNavShow}/>
            <Switch>
              <Route path='/detail' component={Detail}/>
              <Route path='/term' component={Term}/>
              <Route path='/activity/:id' component={Detail}/>
              <Route path='/history/:id' component={Detail}/>
              <Route path='/activity' component={Activity}/>
              <Route path='/history' component={History}/>
              <Route path='/advisory' component={Advisory}/>
              <Route path='/question' component={Question}/>
              <Route path='/opinion' component={Opinion}/>
              <Route path='/' component={About}/>
              {/*      <Redirect from='/' exact to='/home'/>*/}
            </Switch>
            <FooterNav/>
          </ScrollToTop>
        </BrowserRouter>
      </div>
    );
  }
}


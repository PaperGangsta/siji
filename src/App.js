import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Container from './page/container/Container';
import Detail from './page/detail/Detail';

export default class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/detail' component={Detail}/>
          <Route path='/' component={Container}/>
        </Switch>
      </BrowserRouter>
    )
  }
}


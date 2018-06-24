import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

import {
  Home
} from 'screen/index'

import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

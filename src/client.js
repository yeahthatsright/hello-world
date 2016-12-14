import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/app.jsx';
import AwesomeComponent from './components/awesome.jsx';

require('./sass/styles.scss');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}/>
    <Route path='/Awesome' component={AwesomeComponent}/>
  </Router>,

  document.getElementById('root')
);

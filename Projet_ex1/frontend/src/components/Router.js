import React from 'react';
import { Router, Route, Link } from 'react-router-dom'
import history from './History'
import App from "./App"
import Login from '../Login'
import logo from './logo.svg';
import './App.css';

function Router() {
  return (
    <div>
      <Router history={history}>
        <Route exact path="/" component={Login} />
        <Route exact path="/index" component={App} />
      </Router>
    </div>
  );
}

export default Router;
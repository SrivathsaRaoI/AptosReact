import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from './containers/Login';
import MainLayout from './containers/MainLayout';
import Home from './containers/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './assets/styles/App.css';

export default () => {
 return (
   <HashRouter>
   <Switch>
   <Route exact path='/' component={Login}/>
   <Route component={MainLayout}>
     <Route path="/home" component={Home} />
   </Route>  
   </Switch>
   </HashRouter>
 )
}
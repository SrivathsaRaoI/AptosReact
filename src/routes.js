import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './containers/Login';
import MainLayout from './containers/MainLayout';
import Home from './containers/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './assets/styles/App.css';

export default () => {
 return (
   <BrowserRouter>
   <Switch>
   <Route exact path='/' component={Login}/>
   <Route component={MainLayout}>
     <Route path="/home" component={Home} />
   </Route>  
   </Switch>
   </BrowserRouter>
 )
}
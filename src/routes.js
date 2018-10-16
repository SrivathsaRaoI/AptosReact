import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './containers/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
export default () => {
 return (
   <BrowserRouter>
   <Switch>
   <Route exact path='/' component={Login}/>
   </Switch>
   </BrowserRouter>
 )
}
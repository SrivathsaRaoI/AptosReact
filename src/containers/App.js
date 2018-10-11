import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Header from '../components/Header';
import {connect} from 'react-redux';
import {loginAction} from '../actions/loginAction';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js';
import 'font-awesome/css/font-awesome.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import '../assets/styles/app.scss';



library.add(faLock)

class App extends Component{
  constructor(){
    super();
  }
  componentDidMount(){
    this.props.loginAction()
  }
  render(){
    return(
      <div className="App">
        <Header signed ="true" />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: () => {
      dispatch(loginAction())
    }
  }
}

const mapStateToProps = (state) => {
  return { loginReducer: state.loginReducer };
};

export default connect(mapStateToProps,mapDispatchToProps)(hot(module)(App));

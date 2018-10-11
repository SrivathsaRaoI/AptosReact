import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Header from '../components/Header';
import AzureCosmosDb from '../components/AzureCosmosDb';
import Banner from '../components/Banner';
import Control from '../components/Control';
import Deliver from '../components/Deliver';
import Footer from '../components/Footer';
import Leap from '../components/Leap';
import Meet from '../components/Meet';
import ReImagine from '../components/ReImagine';
import SignInModal from '../components/SignInModal';
import {connect} from 'react-redux';
import {getCommonApiAction} from '../actions/apiServiceAction';
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
    this.props.getCommonApiAction()
  }
  render(){
    return(
      <div className="App">
        <Header signed ="true" />
        <Banner />
        <ReImagine />
        <Leap signed ="true"/>
        <Meet />
        <Control />
        <Deliver />
        <AzureCosmosDb />
        
        
        
       
        
        
        
        <SignInModal />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCommonApiAction: () => {
      dispatch(getCommonApiAction())
    }
  }
}

const mapStateToProps = (state) => {
  return { apiServiceReducer: state.apiServiceReducer };
};

export default connect(mapStateToProps,mapDispatchToProps)(hot(module)(App));

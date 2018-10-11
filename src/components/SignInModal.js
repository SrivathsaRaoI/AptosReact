import React from 'react';
import {connect} from 'react-redux';

class SignInModal extends React.Component {
  constructor(){
    super();
  }
 render () {
   return (
     <div>
       SignInModal <br/>
     </div>
   )
 }
}

const mapStateToProps = (state) => {
  return { apiServiceReducer: state.apiServiceReducer };
};

export default connect(mapStateToProps)(SignInModal);
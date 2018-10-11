import React from 'react';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends React.Component {
  constructor(){
    super();
  }
 render () {
   const data = this.props.apiServiceReducer.data;
   const head = data.footer && data.footer.NoSign && data.footer.NoSign.head ||"";
   const info = data.footer && data.footer.NoSign && data.footer.NoSign.info ||"";
   const ButtonText = data.footer && data.footer.NoSign && data.footer.NoSign.ButtonText ||"";  


   return (
    <footer>
    <div className="container-fluid common-footer-color">
        <div className="container">
            <div className="text-center">
                <h1>{head}</h1>
                <p>{info}</p>
                <button type="button"  className="btn btnNosign btn-lg"><i className="fa fa-lock fa-xs" aria-hidden="true"></i> {ButtonText}</button>
            </div>
        </div> 
    </div>
</footer>
   )
 }
}

const mapStateToProps = (state) => {
  return { apiServiceReducer: state.apiServiceReducer };
};

export default connect(mapStateToProps)(Footer);


///<FontAwesomeIcon size="xs" icon="lock" />
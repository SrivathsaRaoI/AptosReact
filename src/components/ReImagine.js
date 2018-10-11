import React from 'react';
import {connect} from 'react-redux';

class ReImagine extends React.Component {
  constructor(){
    super();
  }
 render () {
  const data = this.props.apiServiceReducer.data;
  const title = data.reimagine && data.reimagine.title  ||"";
  const chapter = data.reimagine && data.reimagine.chapter  ||"";
  const head = data.reimagine && data.reimagine.head  ||"";
  const textPrimary = data.reimagine && data.reimagine.textPrimary  ||"";
  const textSecondary = data.reimagine && data.reimagine.textSecondary  ||"";
   return (
    <div className="reimagine" id="reimagine">
    <div className="container-fluid common-page-head">
        <div className="container">
            <div>
                <h3>{chapter}</h3>
            </div>
            <div>
                <h1>{title}</h1>
            </div>
        </div> 
    </div>
    <div className="container-fluid common-page-subhead">
        <div className="container">
            <div>
                <h2>{head}</h2>
            </div>
        </div> 
    </div>
    <div className="container-fluid common-div">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"><p>{textPrimary}</p></div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"><p>{textSecondary}</p></div>
                </div>
            </div>
    </div>
</div> 
   )
 }
}

const mapStateToProps = (state) => {
  return { apiServiceReducer: state.apiServiceReducer };
};

export default connect(mapStateToProps)(ReImagine);
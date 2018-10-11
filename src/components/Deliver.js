import React from 'react';
import {connect} from 'react-redux';

class Deliver extends React.Component {
  constructor(){
    super();
  }
 render () {
  const data = this.props.apiServiceReducer.data;
  const title = data.deliver && data.deliver.title  ||"";
  const chapter = data.deliver && data.deliver.chapter  ||"";
  const head = data.deliver && data.deliver.head  ||"";
  const urlsm = data.deliver && data.deliver.urlsm  ||"";
  const url = data.deliver && data.deliver.url  ||"";
  const textPrimary = data.deliver && data.deliver.textPrimary  ||"";
  const textContent = data.deliver && data.deliver.textContent  ||"";
  const textSecondary = data.deliver && data.deliver.textSecondary  ||"";
  const textSecondarySub = data.deliver && data.deliver.textSecondarySub  ||"";
  const contentPrimary = data.deliver && data.deliver.capData && data.deliver.capData.contentPrimary ||"";
  const contentSecondary = data.deliver && data.deliver.capData && data.deliver.capData.contentSecondary ||"";
  const contentUrl = data.deliver && data.deliver.capData && data.deliver.capData.url ||"";
   return (
    <div className="deliver common-page-img-fix" id="deliver">
    <div className="container-fluid common-page-head">
       
        <div className="container">
            <div>
                <h3>{chapter}</h3>
            </div>
            <div>
                <h1>{title}</h1>
            </div>
            <div className="d-lg-none imageContainer d-xl-none d-md-none">
                <img src={urlsm} alt=""/>
            </div>
        </div> 
    </div>
    <div className="container-fluid common-page-subhead">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h3>{head}</h3>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 imageContainer d-sm-none d-none d-md-block d-lg-block d-xl-block">
                    <img src={url} alt=""/>
                </div>
            </div>
            
        </div> 
    </div>
    <div className="container-fluid common-div">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <p>{textPrimary}</p>
                        <p dangerouslySetInnerHTML={{ __html: textContent} }></p>
                        </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <p dangerouslySetInnerHTML={{ __html: textSecondary} }></p>
                        <p>{textSecondarySub}</p>
                        </div>
                </div>
            </div>
    </div>
    <div className="common-page-head  common-border-bottom">
                <div className="container common-abs-container">
                <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <p>{contentPrimary}</p>
                            <p>{contentSecondary}</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 imageContainer" >
                            <img src={contentUrl} />
                        </div>
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

export default connect(mapStateToProps)(Deliver);
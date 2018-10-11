import React from 'react';
import {connect} from 'react-redux';

class Control extends React.Component {
  constructor(){
    super();
  }
 render () {
  const data = this.props.apiServiceReducer.data;
  const chapter = data.control && data.control.chapter ||null;
  const title = data.control && data.control.title ||null;
  const urlsm = data.control && data.control.urlsm ||null;
  const head = data.control && data.control.head ||null;
  const url = data.control && data.control.url ||null;
  const textPrimary = data.control && data.control.textPrimary ||null;
  const textContent = data.control && data.control.textContent ||null;
  const textSecondary = data.control && data.control.textSecondary ||null;
  const textSecondarySub = data.control && data.control.textSecondarySub ||null; //controlInfo.tabData.tabOne.head
  const tabOneHead = data.control && data.control.tabData && data.control.tabData.tabOne && data.control.tabData.tabOne.head  ||null;
  const tabTwoHead = data.control && data.control.tabData && data.control.tabData.tabTwo && data.control.tabData.tabTwo.head  ||null;
  const tabOneUrl = data.control && data.control.tabData && data.control.tabData.tabOne && data.control.tabData.tabOne.url  ||null;
  const tabTwoUrl = data.control && data.control.tabData && data.control.tabData.tabTwo && data.control.tabData.tabTwo.url  ||null;
   return (
    <div className="control common-page-img-fix" id="control">
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

                <div className="tabView">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="sdc-tab" data-toggle="tab" href="#sdc" role="tab" aria-controls="sdc" aria-selected="true">{tabOneHead}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="edc-tab" data-toggle="tab" href="#edc" role="tab" aria-controls="edc" aria-selected="false">{tabTwoHead}</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="sdc" role="tabpanel" aria-labelledby="sdc-tab">
                            <img src={tabOneUrl} alt=""/>
                        </div>
                        <div className="tab-pane fade imageContainer" id="edc" role="tabpanel" aria-labelledby="edc-tab">
                            <img src={tabTwoUrl} alt=""/>
                        </div>
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

export default connect(mapStateToProps)(Control);
import React from 'react';
import {connect} from 'react-redux';

class AzureCosmosDb extends React.Component {
  constructor(){
    super();
  }
 render () {
  const data = this.props.apiServiceReducer.data;
  const chapter = data.cosmos && data.cosmos.chapter ||null;
  const title = data.cosmos && data.cosmos.title ||null;
  const head = data.cosmos && data.cosmos.head ||null;
  const url = data.cosmos && data.cosmos.url ||null;
  const urlsm = data.cosmos && data.cosmos.urlsm ||null;
  const textPrimary = data.cosmos && data.cosmos.textPrimary ||null;
  const textContent = data.cosmos && data.cosmos.textContent ||null;
  const textSecondary = data.cosmos && data.cosmos.textSecondary ||null;
  const appTitle = data.cosmos && data.cosmos.appData && data.cosmos.appData.title ||null;
  const content = data.cosmos && data.cosmos.appData && data.cosmos.appData.content ||null;//cosmosInfo.appData.navData
  const navDataList = data.cosmos && data.cosmos.appData && data.cosmos.appData.navData ||[];
  
  var tabHeader =[],tabContent =[],footerRangeList =[];
  const footerURL = data.cosmos && data.cosmos.appData && data.cosmos.appData.footer && data.cosmos.appData.footer.url ||null;
 
  const noteData = data.cosmos && data.cosmos.appData && data.cosmos.appData.footer && data.cosmos.appData.footer.noteData ||null;
  const footerRange = data.cosmos && data.cosmos.appData && data.cosmos.appData.footer && data.cosmos.appData.footer.range ||[];
  tabHeader = navDataList.map((navData,i)=>{
    return(<li className="nav-item" key ={i} >
    <a key ={i} className="nav-link " id={"pills-"+navData.content.link+"-tab"} data-toggle="pill" href={"#pills-"+navData.content.link} role="tab" aria-controls="strong-home" aria-selected="true">{navData.content.title}</a>
</li>)
  })
  footerRangeList = footerRange.map((footerData,i)=>{
    return(<div key ={i}>
    <div className="row rangeContainer">
        <p>{footerData.info}</p>
    </div>
  
</div>)
  })
 
  tabContent = navDataList.map((navData,i)=>{
      var listDataArray =[];
    const listData = navData.content && navData.content.content && navData.content.content.listData ||[];//items.content.content.listData
    console.log("sri",navData);
    listDataArray = listData.map((Data,j)=>{
        return(<li key ={j}>
        <p><span  dangerouslySetInnerHTML={{ __html: Data.title} }></span> <span>{Data.content}</span></p>
    </li>)
      })
    return(<div  className="tab-pane fade" id={'pills-'+navData.content.link} role="tabpanel" aria-labelledby="pills-strong-tab" key ={i}>
              <div className="row">
                  <div className="col-lg-3">
                      <img src={navData.content.url} alt=""/>
                  </div>
                  <div  className="col-lg-9">
                      <h3 className="blue">{navData.content.head}</h3>
                      <p>{navData.content.content.infoPrimary}</p>
                      <ul className="">
                          {listDataArray}
                      </ul>
                  </div>
              </div>
          </div>)
  })
   return (
    <div className="cosmos common-page-img-fix" id="cosmos">
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
            <div className="container border-bottom-black">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <p>{textPrimary}</p>
                        <p dangerouslySetInnerHTML={{ __html: textContent} }></p>
                        </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <p dangerouslySetInnerHTML={{ __html: textSecondary} }></p>
                        </div>
                </div>
            </div>
            <div className="container">
                <div className="border-bottom-black">
                    <div>
                        <h3 className="blue">{appTitle}</h3>
                        <p>{content}</p>
                    </div>
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    {tabHeader}
                </ul>
                <div className="tab-content" id="pills-tabContent">
                   {tabContent} 
                </div>
                </div>
                <div className="border-bottom-black">
                    <img src={footerURL} alt=""/>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        {footerRangeList}
                    </div>
                    <div className="col-lg-9">
                      <p>{noteData}</p>
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

export default connect(mapStateToProps)(AzureCosmosDb);
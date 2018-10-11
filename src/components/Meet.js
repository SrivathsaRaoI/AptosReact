import React from 'react';
import {connect} from 'react-redux';

class Meet extends React.Component {
  constructor(){
    super();
  }
 render () {
  const data = this.props.apiServiceReducer.data;
  const chapter = data.meet && data.meet.chapter  ||"";
  const title = data.meet && data.meet.title  ||"";
  const urlsm = data.meet && data.meet.urlsm  ||"";
  const head = data.meet && data.meet.head  ||"";
  const url = data.meet && data.meet.url  ||"";
  const textPrimary = data.meet && data.meet.textPrimary  ||"";
  const textSecondary = data.meet && data.meet.textSecondary  ||"";
  const extraInfo = data.meet && data.meet.extraInfo  ||"";
  const dataTitle = data.meet && data.meet.dataReplicate && data.meet.dataReplicate.title  ||"";
  const content = data.meet && data.meet.dataReplicate && data.meet.dataReplicate.content  ||"";
  const dataUrl = data.meet && data.meet.dataReplicate && data.meet.dataReplicate.url  ||"";
   return (
    <div className="meet common-page-img-fix" id="meet">
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
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"><p>{textPrimary}</p></div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <p>{textSecondary}</p>
                        <p>{extraInfo}</p>
                        </div>
                </div>
            </div>
            <div className="container">
                <div>
                    <div>
                        <h3 className="blue">{dataTitle}</h3>
                        <p>{content}</p>
                    </div>
                </div>
                    <div className="imageContainer">
                        <img src={dataUrl} />
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

export default connect(mapStateToProps)(Meet);
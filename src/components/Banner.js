import React from 'react';
import {connect} from 'react-redux';

class Banner extends React.Component {
  constructor(){
    super();
    this.state ={windowSize:(window.innerHeight -68) +'px'};
  }
  componentWillMount(){
    window.onresize =(event)=> {
      this.setState({
        windowSize:(window.innerHeight -68) +'px'
      })
    }
  }
 render () {
  const data = this.props.apiServiceReducer.data;
  const url = data.banner && data.banner.url ||null;
  const heading = data.banner && data.banner.data && data.banner.data.heading ||null;
  const body = data.banner && data.banner.data && data.banner.data.body ||null;
  var height = this.state.windowSize;
   return (
    <div className="banner" style ={{height:height}}>
     <div className="header-row" id="header-row" style ={{"backgroundImage": "url("+url+")"}}>
      <div className="container d-flex h-100 ">
        <div className="d-sm-block d-md-block d-lg-none d-xl-none align-self-center">
          <div className="row  justify-content-center">     
            <div className="col-12">
              <h1 className="common-banner-head">{heading}</h1>
              <h3>{body}</h3>
            </div>
          </div>
        </div>
        <div className="d-none d-lg-block d-xl-block align-self-center">
          <div className="row  justify-content-end">     
            <div className="col-6">
                <h1 className="common-banner-head">{heading}</h1>
                <h3>{body}</h3>
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

export default connect(mapStateToProps)(Banner);
import React from 'react';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends React.Component {
  constructor(){
    super();
  }
 render () {
   const data = this.props.apiServiceReducer.data;
   const signed = this.props.signed;
   var navigation = (data.navigation)?data.navigation:[];
   var logo = (data.general)?data.general:{};
   var navigationList = [];
  /* navigationList = navigation.map((item,i)=>{
     return(
      <li class="nav-item active" key ={i}>
     if(signed == "true")?{
           <a class="nav-link" href="#" >
            <span>{item.title}</span>
            </a>
      }
      else{
          <a class="nav-link" href="#">
          if(item.title !='Reimagine' && item.title !="Leap"){

            <span  class="grey" >
            <ion-icon name="lock"></ion-icon> {item.title}<span class="sr-only">(current)</span>
            </span>

        }
        else{
            <span >
                {item.title}<span class="sr-only">(current)</span>
              </span>          
        }
          </a>
        
      }
      </li>
     )
      
      
   })*/
   //https://content.microsoft.com/apps-for-cats
   navigationList = navigation.map((item,i)=>{
     if(signed == "truew"){
        return (<li className="nav-item active" key ={i}>
        <a className="nav-link" href="#" >
           <span>{item.title}</span>
           </a>
           </li>)
     }
     else{
      if(item.title !='Reimagine' && item.title !="Leap"){
        return (<li className="nav-item active" key ={i}>
         <a className="nav-link" href="#">
         <span  className="grey" ></span>
         <i className="fa fa-lock" aria-hidden="true"></i> {item.title}<span className="sr-only">(current)</span>
       
         </a>
        </li>)
      }
      else{
        return (<li className="nav-item active" key ={i}>
         <a className="nav-link" href="#">
         <span >
               {item.title}<span className="sr-only">(current)</span>
             </span>
         </a>
        </li>)
      }
     }
     
     
     
  })
   console.log("srivathswa rao",navigationList)
   return (
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"><img src={logo.logo} alt="MS Azure Cosmos DB"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul className="navbar-nav">
      {navigationList}
    </ul>
  </div>

</nav>
</div>
   )
 }
}

const mapStateToProps = (state) => {
  return { apiServiceReducer: state.apiServiceReducer };
};

export default connect(mapStateToProps)(Header);
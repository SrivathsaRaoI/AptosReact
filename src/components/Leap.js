import React from 'react';
import {connect} from 'react-redux';

class Leap extends React.Component {
  constructor(){
    super();
    this.state ={toggle:false}
  }
 render () {
  const data = this.props.apiServiceReducer.data;
  const signed = this.props.signed;
  const chapter = data.leap && data.leap.chapter  ||"";
  const title = data.leap && data.leap.title  ||"";
  const head = data.leap && data.leap.head  ||"";
  const basicInfo = data.leap && data.leap.bodyText && data.leap.bodyText.basicInfo  ||"";
  const headerInfo = data.leap && data.leap.bodyText && data.leap.bodyText.headerInfo  ||"";
  const workInfo = data.leap && data.leap.bodyText && data.leap.bodyText.workInfo  ||"";
  const petCompare = data.leap && data.leap.bodyText && data.leap.bodyText.petCompare  ||"";
  const cageFit = data.leap && data.leap.bodyText && data.leap.bodyText.cageFit  ||"";
  const cageSchema = data.leap && data.leap.bodyText && data.leap.bodyText.cageSchema  ||"";
  const ownerInfo = data.leap && data.leap.bodyText && data.leap.bodyText.ownerInfo  ||"";
  const petRoom = data.leap && data.leap.bodyText && data.leap.bodyText.petRoom  ||"";
  const urlDual = data.leap && data.leap.urlDual  ||"";
  const url = data.leap && data.leap.url  ||"";
  const headerInfoToggle = data.leap && data.leap.toggleVolume && data.leap.toggleVolume.headerInfo  ||"";
  const headerInfoToggleSec = data.leap && data.leap.toggleVolume && data.leap.toggleVolume.toggleInfoSecondary && data.leap.toggleVolume.toggleInfoSecondary.headerInfo  ||"";
  const bodyTextToggleSec = data.leap && data.leap.toggleVolume && data.leap.toggleVolume.toggleInfoSecondary && data.leap.toggleVolume.toggleInfoSecondary.bodyText  ||"";
  const headerInfoTogglePri = data.leap && data.leap.toggleVolume && data.leap.toggleVolume.toggleInfoPrimary && data.leap.toggleVolume.toggleInfoPrimary.headerInfo  ||"";
  const bodyTextTogglePri = data.leap && data.leap.toggleVolume && data.leap.toggleVolume.toggleInfoPrimary && data.leap.toggleVolume.toggleInfoPrimary.bodyText  ||"";
  const extraInfoTogglePri = data.leap && data.leap.toggleVolume && data.leap.toggleVolume.toggleInfoPrimary && data.leap.toggleVolume.toggleInfoPrimary.extraInfo  ||"";
  const btnTextToggleSec = data.leap && data.leap.toggleVolume && data.leap.toggleVolume .toggleInfoSecondary&& data.leap.toggleVolume.toggleInfoSecondary.btnText  ||"";
  const btnTextTogglePri= data.leap && data.leap.toggleVolume && data.leap.toggleVolume.toggleInfoPrimary && data.leap.toggleVolume.toggleInfoPrimary.btnText  ||"";
  const {toggle} = this.state;
  const active = toggle?'common-card-info active':"common-card-info";
var signedInHtml =  <div>
                      <div className="container">
                          <div className="row">
                              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                  <p>{basicInfo}</p>
                                  <h3>{headerInfo}</h3>
                                  <p>{workInfo}</p>
                                  <p className="blue">{petCompare}</p>
                                  <p>{cageFit}</p>
                                  <p className="blue">{cageSchema}</p>
                                  <p>{ownerInfo}</p>
                                  <p className="blue">{petRoom}</p>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 imageContainer" style={{"backgroundImage": "url("+url+")"}}>
                                  <img src={urlDual} data-aos="zoom-in"/>
                              </div>
                          </div>
                          <div className="row common-card toggleVolume">
                              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                  <h2>{headerInfoToggle}</h2>
                                  <div  className={active}>
                                      {(toggle)?<div >
                                      <h3 className="blue">{headerInfoToggleSec}</h3>
                                          <p>{bodyTextToggleSec}</p>
                                      </div>:
                                      <div >
                                          <h3 className="blue">{headerInfoTogglePri}</h3>
                                          <p>{bodyTextTogglePri}</p>
                                          <p>{extraInfoTogglePri}</p>
                                      </div>}
                                      <button className="btn btn-primary btn-lg" onClick={()=>{this.setState({toggle:!this.state.toggle})}}>{(toggle)?<span >{btnTextToggleSec}</span>:<span >{btnTextTogglePri}</span>}</button>
                                </div>
                            </div>
                            </div>
                            </div>
                            </div>
   return (
    <div className="leap" id="leap">
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
    <div className="container-fluid no-padd ">
                { (signed)? signedInHtml:null}
                   {/* <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 imageContainer d-none d-md-block d-lg-block" >
                         <img v-bind:src="info.toggleVolume.url" />
                    </div>
                </div>
                <div className="row common-card toggleVelocity">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 imageContainer d-none d-md-block d-lg-block" >
                         <img v-bind:src="info.toggleVelocity.url" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="common-card-info " v-bind:className="{ active: velocity }">
                            <div v-show="velocity">
                            <h3 className="blue">{{info.toggleVelocity.toggleInfoSecondary.headerInfo}}</h3>
                                <p>{{info.toggleVelocity.toggleInfoSecondary.bodyText}}</p>
                            </div>
                            <div v-show="!velocity" >
                                <h3 className="blue">{{info.toggleVelocity.toggleInfoPrimary.headerInfo}}</h3>
                                <p>{{info.toggleVelocity.toggleInfoPrimary.bodyText}}</p>
                                <p>{{info.toggleVelocity.toggleInfoPrimary.extraInfo}}</p>
                            </div>
                        <button className="btn btn-primary btn-lg" v-on:click="velocity = !velocity"><span v-show="velocity">{{info.toggleVelocity.toggleInfoSecondary.btnText}}</span><span v-show="!velocity">{{info.toggleVelocity.toggleInfoPrimary.btnText}}</span></button>
                        </div>
                    </div>
                </div>
                <div className="row common-card toggleVariety">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="common-card-info" v-bind:className="{ active: variety }">
                            <div v-show="variety">
                            <h3 className="blue">{{info.toggleVariety.toggleInfoSecondary.headerInfo}}</h3>
                                <p>{{info.toggleVariety.toggleInfoSecondary.bodyText}}</p>
                            </div>
                            <div v-show="!variety" >
                                <h3 className="blue">{{info.toggleVariety.toggleInfoPrimary.headerInfo}}</h3>
                                <p>{{info.toggleVariety.toggleInfoPrimary.bodyText}}</p>
                                <p>{{info.toggleVariety.toggleInfoPrimary.extraInfo}}</p>
                            </div>
                        <button className="btn btn-primary btn-lg" v-on:click="variety = !variety"><span v-show="variety">{{info.toggleVariety.toggleInfoSecondary.btnText}}</span><span v-show="!variety">{{info.toggleVariety.toggleInfoPrimary.btnText}}</span></button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 imageContainer d-none d-md-block d-lg-block" >
                         <img v-bind:src="info.toggleVariety.url" />
                    </div>
            </div>
            <div className="row common-card toggleDynamic">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 imageContainer d-none d-md-block d-lg-block" >
                         <img v-bind:src="info.toggleDynamic.url" data-aos="fade-left" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="common-card-info " v-bind:className="{ active: dynamic }">
                            <div v-show="dynamic">
                            <h3 className="blue">{{info.toggleDynamic.toggleInfoSecondary.headerInfo}}</h3>
                                <p>{{info.toggleDynamic.toggleInfoSecondary.bodyText}}</p>
                            </div>
                            <div v-show="!dynamic" >
                                <h3 className="blue">{{info.toggleDynamic.toggleInfoPrimary.headerInfo}}</h3>
                                <p>{{info.toggleDynamic.toggleInfoPrimary.bodyText}}</p>
                                <p>{{info.toggleDynamic.toggleInfoPrimary.extraInfo}}</p>
                            </div>
                        <button className="btn btn-primary btn-lg" v-on:click="dynamic = !dynamic"><span v-show="dynamic">{{info.toggleDynamic.toggleInfoSecondary.btnText}}</span><span v-show="!dynamic">{{info.toggleDynamic.toggleInfoPrimary.btnText}}</span></button>
                        </div>
                    </div>
            </div>
            <div className="row common-card toggleGlobal">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="common-card-info" v-bind:className="{ active: global }">
                            <div v-show="global">
                            <h3 className="blue">{{info.toggleGlobal.toggleInfoSecondary.headerInfo}}</h3>
                                <p>{{info.toggleGlobal.toggleInfoSecondary.bodyText}}</p>
                            </div>
                            <div v-show="!global" >
                                <h3 className="blue">{{info.toggleGlobal.toggleInfoPrimary.headerInfo}}</h3>
                                <p>{{info.toggleGlobal.toggleInfoPrimary.bodyText}}</p>
                                <p>{{info.toggleGlobal.toggleInfoPrimary.extraInfo}}</p>
                            </div>
                        <button className="btn btn-primary btn-lg" v-on:click="global = !global"><span v-show="global">{{info.toggleGlobal.toggleInfoSecondary.btnText}}</span><span v-show="!global">{{info.toggleGlobal.toggleInfoPrimary.btnText}}</span></button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 imageContainer d-none d-md-block d-lg-block" >
                         <img v-bind:src="info.toggleGlobal.url" />
                    </div>
            </div>
        </div>
            <div className="common-page-head leapFooter common-border-bottom">
                <div className="container common-abs-container">
                <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <p>{{info.footerContent.content}}</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 imageContainer absContainer" >
                            <img v-bind:src="info.footerContent.url" />
                        </div>
                </div>
                </div>
            </div>
    </div>
    <div className="container" v-else>
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"><p>{{info.textPrimary}}</p></div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"><p>{{info.textSecondary}}</p></div>
        </div>
   </div>*/}
</div> 
</div>
   )
 }
}

const mapStateToProps = (state) => {
  return { apiServiceReducer: state.apiServiceReducer };
};

export default connect(mapStateToProps)(Leap);
import React, {Component} from 'react';
import { Layout, Menu, Icon } from 'antd';
import {connect} from 'react-redux';

const { Header, Footer, Sider } = Layout;

class MainLayout extends Component{
  constructor(){
    super();
    this.state = {
            collapsed: false
        }
    this.onCollapse = this.onCollapse.bind(this);
    this.toLogout = this.toLogout.bind(this);
  }
  onCollapse(collapsed){
    console.log(collapsed);
    this.setState({ collapsed });
  }
  toLogout(){
      sessionStorage.removeItem("username"); this.props.history.push('/')
  }
  componentWillMount(){
    let username = sessionStorage.getItem("username");
    if(!username){
            this.props.history.push('/')
    }

    }
  render(){
    return(
      <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" style={{height: '60px'}}>
                    </div>
                     <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span>Summary</span>
                        </Menu.Item>
                        <Menu.Item key="2" onClick={this.toLogout}>
                            <Icon type="desktop" />
                            <span>Logout</span>
                        </Menu.Item>
                     </Menu>
                </Sider>
                <Layout>
                    <Header className="header">
                        <div className="logo" />
                            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ padding: '0 0px',
                                                                                                      lineHeight: '64px' }}>
                                <Menu.Item key="1">Order</Menu.Item>
                            </Menu>
                    </Header>
                    {this.props.children}
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Aptos
                    </Footer>
                </Layout>
           </Layout>
    );
  }
}



const mapStateToProps = (state) => {
  return { loginReducer: state.loginReducer };
};

export default connect(mapStateToProps)(MainLayout);

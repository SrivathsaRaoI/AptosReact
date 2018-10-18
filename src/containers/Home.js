import React, {Component} from 'react';
import { Layout, Breadcrumb } from 'antd';
import {connect} from 'react-redux';
import { Table,notification } from 'antd';
const { Content } = Layout;
import {homeAction} from '../actions/homeAction';

const columns = [{
  title: 'Order Id',
  dataIndex: 'order_id',
  key: 'order_id',
  sorter: (a, b) => a.order_id - b.order_id
}, {
  title: 'Item Name',
  dataIndex: 'itemname',
  key: 'itemname',
  sorter: (a, b) => a.itemname.localeCompare(b.itemname) 
}, {
  title: 'Quantity',
  dataIndex: 'quantity',
  key: 'quantity',
  sorter: (a, b) => a.quantity - b.quantity
}, {
  title: 'Status',
  dataIndex: 'status',
  key: 'status',
  sorter: (a, b) => a.status - b.status
}, {
  title: 'Expected DOD',
  dataIndex: 'expected_dod',
  key: 'expected_dod',
  render: (expected_dod) => {
    let dateObj = expected_dod;
    if (typeof expected_dod !== 'object') {
      dateObj = new Date(expected_dod);
    }
   return `${('0' + dateObj.getDate()).slice(-2)}/${('0' + (dateObj.getMonth() + 1)).slice(-2)}/${dateObj.getFullYear()}`;
  },
  sorter: (a, b) => parseInt(new Date(a.expected_dod).getTime()) - parseInt(new Date(b.expected_dod).getTime())
}];


class Home extends Component{
  constructor(){
    super();
    this.state = {
            data:[],
            isLoding:false
        }
  }
  onCollapse(collapsed){
    console.log(collapsed);
    this.setState({ collapsed });
  }

   componentWillReceiveProps(postProps){
    if(!Object.is(postProps.homeReducer,this.props.homeReducer)){
      var responseData = postProps.homeReducer.data.data;
      if(postProps.homeReducer.data.Loading){
            this.setState({isLoding:true})
      }
      else{
        
            this.setState({isLoding:false})
      }
      if(postProps.homeReducer.data.Error){
        notification.open({
              message: '',
              description: "Unable to connect !!!",
          });
      }

    }
   }   
    componentDidMount(){
      let user_id = this.props.location && this.props.location.state && this.props.location.state && 0;
      this.props.homeAction(user_id);
      alert();
    }

  render(){
    return(
      <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Order Summary</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                       <Table dataSource={this.state.data} loading={this.state.isLoding}columns={columns} />
                    </div>
            </Content>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    homeAction: (userId) => {
      dispatch(homeAction(userId));
    }
  }
}

const mapStateToProps = (state) => {
  return { homeReducer: state.homeReducer };
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);

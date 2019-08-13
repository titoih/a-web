import React from 'react';
import { Breadcrumb } from 'antd';
import { Card, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import Logout from '../authentication/Logout';
import { withAuthConsumer } from '../../context/AuthStore'
import authenticationService from '../../services/AuthenticationService';

const { Meta } = Card;

class BreadCrumb extends React.Component {

  state = {
    user: {
      avatarURL: this.props.user.avatarURL
    }
  }

  componentDidMount() {
    if (this.props.isAuthenticated()) {
    authenticationService.getProfile(this.props.user.id)
      
      .then(user => this.setState({
        user: {
          avatarURL: user.avatarURL
        } 
      }))
    }
  }

  render(){
    return (
      <React.Fragment>
        <Breadcrumb style={{ margin: '16px 0', display:'flex', justifyContent:'center', alignItems:'center' }}>
          <Breadcrumb.Item>
          <Meta 
          style={{display:'inline-block'}}
          avatar={
          this.props.isAuthenticated() ? <Link to={`/user/${this.props.user.id}`}><Avatar src={this.state.user.avatarURL} /></Link>
          : <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
          }
          />
          </Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
          <Breadcrumb.Item>
           {
            this.props.isAuthenticated()
             ? <Logout />
             : ''
           }
          </Breadcrumb.Item>
        </Breadcrumb>
      </React.Fragment>
    )
  }
}
  
export default withAuthConsumer(BreadCrumb);
    

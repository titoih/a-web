import React from 'react';
import { Breadcrumb } from 'antd';
import { Card, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import Logout from '../authentication/Logout';
import { withAuthConsumer } from '../../context/AuthStore'

const { Meta } = Card;

const BreadCrumb = (props) => {
  console.log(props.user)
  return (
    <React.Fragment>
      <Breadcrumb style={{ margin: '16px 0', display:'flex', justifyContent:'center', alignItems:'center' }}>
        <Breadcrumb.Item>
        <Meta 
        style={{display:'inline-block'}}
        avatar={
        props.isAuthenticated() ? <Link to={`/user/${props.user.id}`}><Avatar src={props.user.avatarURL} /></Link>
        : <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
        }
        />
        </Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
        <Breadcrumb.Item>
         {
          props.isAuthenticated()
           ? <Logout />
           : ''
         }
        </Breadcrumb.Item>
      </Breadcrumb>
        
      </React.Fragment>
  )
}
export default withAuthConsumer(BreadCrumb);
    

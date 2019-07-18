import React from 'react';
import { Breadcrumb } from 'antd';
import { Card, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { withAuthConsumer } from '../../context/AuthStore'

const { Meta } = Card;

const BreadCrumb = (props) => {
  return (
      <Breadcrumb style={{ margin: '16px 0' }}>
      
      <Breadcrumb.Item>
      <Meta 
      style={{display:'inline-block'}}
      avatar={
      <Link to={`/user/${props.user.id}`}><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Link>
      }
      /></Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
  )
}
export default withAuthConsumer(BreadCrumb);
    

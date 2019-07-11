import React from 'react';
import { Breadcrumb } from 'antd';
import { Card, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthStore';

const { Meta } = Card;

const BreadCrumb = () => {
  return (
      <Breadcrumb style={{ margin: '16px 0' }}>
       <Meta style={{display:'inline-block'}}
        avatar={<Link to={`/user/5d239a898b908b3fc8f0c20a`}><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Link>}
      />
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
  )
}
const HeaderWithAuthContext = (componentProps) => {
  console.log(componentProps)
  return (
    <AuthContext.Consumer>
      {(consumerProps) => (<BreadCrumb {...consumerProps} {...componentProps} />)}
    </AuthContext.Consumer>
  );
}

export default HeaderWithAuthContext
    

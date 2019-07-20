//antiguo <Card />

import React from 'react';
import { Card } from 'antd';
import { Icon } from 'antd';
const { Meta } = Card;


class User extends React.Component {

  state= {
    iconType:false
  }

  handleIcon = () => {
    if(!this.state.iconType) {
      return 'user-add'
    } else {
      return 'check-circle'
    }
  }

  handleClick = () => {
    this.setState({
      iconType: !this.state.iconType
    })
  }

  render() {
    return (
      <Card
      style={{ width: 300, margin:'auto' }}
      cover={
        <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>
      }
      >
      <Meta
        title={this.props.element.nickName}
        description={this.props.element.email}
      />
      
      { this.props.addFriend === true 
      ? <Icon onClick={() => this.handleClick()} type={this.handleIcon()} style={{fontSize:'20px', margin:'1em'}}/> 
      : '' }
    
      </Card>
    )
  } 
} 

export default User;
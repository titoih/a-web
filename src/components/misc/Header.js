import React from 'react'
import { Menu } from 'antd';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import { withAuthConsumer } from '../../context/AuthStore'


const iconHeader = { fontSize: '15px', color: 'white' };
const navbarBottom = { lineHeight: '64px', position: 'fixed', bottom: '0px', width:'100%',clear:'both' };
const Header = (props) => {
  return (
    // <div className="logo" />
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      style={navbarBottom}
    >
      <Menu.Item key="5"><Link to="/reviews"><Icon type="home" style={iconHeader}/></Link></Menu.Item>
      <Menu.Item key="2"><Link to="/search"><Icon type="search" style={iconHeader}/></Link></Menu.Item>
      <Menu.Item key="4"><Icon type="heart" style={iconHeader}/></Menu.Item>
      {
        props.isAuthenticated() ? <Menu.Item key="3"><Link to={`/user/${props.user.id}`}><Icon type="user" style={iconHeader}/></Link></Menu.Item>
        : <Menu.Item key="3"><Link to="/login"><Icon type="user" style={iconHeader}/></Link></Menu.Item>
      }
      
      <Menu.Item key="1"><Link to="/post"><Icon type="form" style={iconHeader}/></Link></Menu.Item>
    </Menu>
  )
}

export default withAuthConsumer(Header)

import React from 'react';
import { Link } from 'react-router-dom';
import authenticationService from '../../services/AuthenticationService';
import AddFriends from '../friends/AddFriends';
import { Card, Icon, Statistic, Row } from 'antd';
const { Meta } = Card;


class Profile extends React.Component {

  state={
    user:{
      email:'',
      nickName:'',
      id:''
    }
  }
  
  componentDidMount() {
    const id = this.props.match.params.id;
    authenticationService.getProfile(id)
      .then(
        (user) => this.setState({
          ...this.state,
          user: {
            email: user.email,
            nickName: user.nickName,
            id: user.id
          }  
          }),
        (error) => console.error(error)
        )
  }

  render() {
    return (
      <Card
      style={{ width: 300, margin:'auto' }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
      >
      <Meta
        title={this.state.user.nickName}
        description={this.state.user.email}
      />
        <Row gutter={1}>
            
        </Row>
        <Link to='/friends'>
        <Statistic title="Amigos" value={1128} />
        
        </Link>
        <AddFriends />
      </Card>
    );
  }
}

export default Profile;

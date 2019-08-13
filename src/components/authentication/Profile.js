import React from 'react';
import authenticationService from '../../services/AuthenticationService';
import { Card, Icon, Row } from 'antd';
import Counter from '../friends/Counter';
import ReviewsList from '../reviews/ReviewsList';
import { Link } from 'react-router-dom';

const { Meta } = Card;

class Profile extends React.Component {
  

  state={
    user:{
      email:'',
      nickName:'',
      id:'',
      avatarURL:''
    },
    reload:false
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
            id: user.id,
            avatarURL: user.avatarURL
          },
          reload:this.props.location.avatarURL
          }),
        (error) => console.error(error)
        )
  }

  render() {
    if(this.state.reload) {
      window.location.reload(); 
    }
    return (
      <React.Fragment>
      <Card
      style={{ width: 300, margin:'auto' }}
      cover={
        <img
          alt="example"
          src={
            this.state.user.avatarURL
            ? this.state.user.avatarURL
            : 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
            }
          style={{width:'100%'}}
          />
      }
      actions={
      [<Icon type="setting" />, 
        <Link to={`/edit/${this.state.user.id}`}>
          <Icon type="edit" />
        </Link>, 
      <Icon type="ellipsis" />]
      }
      >
      <Meta
        title={this.state.user.nickName}
        description={this.state.user.email}
      />
        <Row gutter={1}>
        </Row>
        <Counter />
      </Card>
      {this.state.user.id ? <ReviewsList theProps={this.state.user.id}/> : ''}
      </React.Fragment>
    );
  }
}

export default Profile;

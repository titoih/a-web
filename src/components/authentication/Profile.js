import React from 'react';
import authenticationService from '../../services/AuthenticationService';
import { Card, Icon, Row } from 'antd';
import Counter from '../friends/Counter';
import ReviewsList from '../reviews/ReviewsList';
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
    console.log(this.state.user)
    return (
      <React.Fragment>
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
        <Counter />
      </Card>
      {this.state.user.id ? <ReviewsList theProps={this.state.user.id}/> : ''}
      </React.Fragment>
    );
  }
}

export default Profile;

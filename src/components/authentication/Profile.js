import React from 'react';
import authenticationService from '../../services/AuthenticationService';
import { Card, Icon, Statistic, Row, Col } from 'antd';
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
        <Row gutter={16}>
          <Col span={12}>
            <Statistic title="Sigues" value={1128} />
            </Col>
            <Col span={12}>
              <Statistic title="Te siguen" value={93} />
            </Col>
        </Row>
      </Card>
    );
  }
}

export default Profile;

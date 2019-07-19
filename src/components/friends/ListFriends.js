import React from 'react';
import authenticationService from '../../services/AuthenticationService';
import { Card } from 'antd';
import TheAntifuckingOne from '../misc/TheAntiFuckingOne';
const { Meta } = Card;

class ListFriends extends React.Component {

  state= {
    friends:[]
  }

  fetchPosts = () => {
    authenticationService.getFriends().then(
      response => {
        this.setState({ friends: response })
      }
    )
  }

  componentDidMount() {
    this.fetchPosts()
  }


  render() {
    console.log(this.state.friends)
    
    return (
      this.state.friends.map((element,index) => {
      
      return (
        <div key={index}>
        <Card
          style={{ width: 300, margin:'auto' }}
          cover={
            <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>
          }
          >
          <Meta
            title={element.nickName}
            description={element.email}
          />
          </Card>
          <TheAntifuckingOne/>
        </div>
      )
      })
    )
  }



}

export default ListFriends;
import React from 'react';
import authenticationService from '../../services/AuthenticationService';
import { Link } from 'react-router-dom';
import { Statistic } from 'antd';


class Counter extends React.Component {

  state={
    dataFriend:[],
    count:0
  }

  fetchFriends = () => {
    authenticationService.getFriends().then(
      response => {
        console.log(response.length)
        this.setState({
          dataFriend:[response],
          count:response.length
        })  
      }
    )
  }

  componentDidMount() {
    this.fetchFriends()
  }

  render() {
    return (
      <Link to='/friends'>
      <Statistic 
      title="Amigos"
      value={this.state.count} />
      </Link>
    )
  }
}


export default Counter;
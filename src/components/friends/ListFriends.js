import React from 'react';
import authenticationService from '../../services/AuthenticationService';


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
    'hola'  
    )
  }



}

export default ListFriends;
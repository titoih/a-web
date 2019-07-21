import React from 'react';
import authenticationService from '../../services/AuthenticationService';
import TheAntifuckingOne from '../misc/TheAntiFuckingOne';
import User from '../common/User';

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
    return (
      this.state.friends.map((element,index) => {
      
      return (
        <div key={index}>
          <User element={element}/>
          <TheAntifuckingOne/>
        </div>
      )
      })
    )
  }
}

export default ListFriends;
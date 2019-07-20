import React from 'react';
import authenticationService from '../../services/AuthenticationService';
import TheAntifuckingOne from '../misc/TheAntiFuckingOne';
import User from '../misc/User';

class UserSearch extends React.Component {
  state={
    users:[]
  }

  fetchUsers = () => {
    authenticationService.getUsers().then(
      response => {
        this.setState({
          users:response
        })
      }
    )
  }

  componentDidMount = () => {
    this.fetchUsers()
  }
  

  render() {
    return (
      this.state.users.map((element,index) => {
      
      return (
        <div key={index}>
        <User element={element} addFriend={true}/>
        <TheAntifuckingOne/>
        </div>
      )
      })
    )
  }

}

export default UserSearch;

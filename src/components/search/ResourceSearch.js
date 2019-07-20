import React from 'react';
import AuthenticationService from '../../services/AuthenticationService';
import Resource from './Resource';

class ResourceSearch extends React.Component {
  state={
    resources:[]
  }

  fetchReviews = () => {
    AuthenticationService.getResources().then(
      response => {
        this.setState({
          resources:response
        })
      }
    )
  }

  componentDidMount = () => {
    this.fetchReviews()
  }
  
  render() {
    return (
      this.state.resources.map((element, index) => {
        return (
        <React.Fragment key={index}>
          <Resource element={element}/>
        </React.Fragment>
        )
      })
     ) 
  }
} 

export default ResourceSearch;


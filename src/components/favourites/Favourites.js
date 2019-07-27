import React from 'react';
import { withAuthConsumer } from '../../context/AuthStore';
import AuthenticationService from '../../services/AuthenticationService';
import EachFavourite from './EachFavourites';
import { Empty } from 'antd';

class Favourites extends React.Component {
  state={
    reviews:[]
  }

  fetchFavourites = () => {
    AuthenticationService.getFavourites()
      .then(response => {
        this.setState({
          reviews:response
        })
      })
  }
  
  componentDidMount () {
    this.fetchFavourites()
  }

  render(){
    return (
      <React.Fragment>
      
      { 
        this.state.reviews.map((element,index) => 
        <EachFavourite key={index} element={element}/>)
      }
      {
        this.state.reviews.length === 0 ? 
        <Empty 
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description={
        <span>
        Todavía no tienes Favoritos :(
        </span>
    }
         /> : ''
      }
      
      </React.Fragment>
    )
  }
}

export default withAuthConsumer(Favourites);
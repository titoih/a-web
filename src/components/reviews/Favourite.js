import React from 'react';
import { Icon } from 'antd';
import { message } from 'antd';
import AuthenticationService from '../../services/AuthenticationService';


class Favourite extends React.Component {
  state={
    type:true
  }

  handleClick = () => {
    const id = {reviewId: this.props.reviewId}
    AuthenticationService.postFavourites(id)
      this.setState({
        type:!this.state.type
      })
      message.success('¡Añadido a tus Favoritos!')
  }

  render(){
    console.log(this.props)
    return (
        <React.Fragment>
          <Icon 
          onClick={ () => this.handleClick()} 
          type={this.state.type ? 'heart' : 'check-circle'} 
          style={{ marginRight: 8, fontSize:'20px' }}
          text={this.state.count}
          />
        </React.Fragment>
      )
  }
}

export default Favourite;


import React from 'react';
import { Icon } from 'antd';
import { message } from 'antd';



class Favourite extends React.Component {
  state={
    // count:0,
    type:true
  }

  handleClick = () => {
    this.setState({
      type:!this.state.type
    })
     message.success('Añadido a tus Favoritos')
  }

  render(){
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


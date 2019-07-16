import React from 'react';
import { Input } from 'antd';
const { Search } = Input;


class SearchBar extends React.Component {

  textHandler = (e) => {
    this.props.searchText(e.target.value)
  }

  render(){
    return (
      <Search onChange={e => this.textHandler(e)} 
      value={this.props.textState} 
      name="title"
      className="input" 
      type="text" 
      placeholder="Escribe un título" 
      autoComplete="off"
      style={{display:this.props.showList}}
      />
      
    )
  }

}

export default SearchBar;
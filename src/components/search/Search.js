import React from 'react';
import UserSearch from './UserSearch';
import ResourceSearch from './UserSearch';
import { Radio } from 'antd';

class Search extends React.Component {

  state= {
    userSearch: true,
    resourceSearch:false
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ marginTop: 16, margin:'1em'}}>
          <Radio.Group defaultValue={this.state.userSearch} buttonStyle="solid">
            <Radio.Button value={this.state.userSearch}>Gente</Radio.Button>
            <Radio.Button value={this.state.resourceSearch}>Títulos</Radio.Button>
          </Radio.Group>
        </div>
        { this.state.userSearch
          ? <UserSearch /> 
          : <ResourceSearch /> }        
      </React.Fragment>
    )
  }


}

export default Search;
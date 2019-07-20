import React from 'react';
import UserSearch from './UserSearch';
import ResourceSearch from './ResourceSearch';
import { Radio } from 'antd';

class Search extends React.Component {
  state = {
    search: 'user'
  }

  handleCLick = (search) => {
    this.setState({
      search
    })
  }

  render() {
    console.log(this.state)
    return (
      <React.Fragment>
        <div style={{ marginTop: 16, margin:'1em'}}>
          <Radio.Group defaultValue={this.state.search} buttonStyle="solid">
            <Radio.Button onClick={() => this.handleCLick('user')} value={'user'}>Gente</Radio.Button>
            <Radio.Button onClick={() => this.handleCLick('resource')} value={'resource'}>Títulos</Radio.Button>
          </Radio.Group>
        </div>
        { 
          this.state.search === 'user' && <UserSearch />
        }
        { 
          this.state.search === 'resource' && <ResourceSearch />
        }
      </React.Fragment>
    )
  }
}

export default Search;
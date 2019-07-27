import React from 'react';
import UserSearch from './UserSearch';
import ResourceSearch from './ResourceSearch';
import ReviewSearch from './ReviewSearch';
import { Radio } from 'antd';

class Search extends React.Component {
  state = {
    search: 'user'
  }

  handleClick = (search) => {
    this.setState({
      search
    })
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ marginTop: 16, margin:'1em'}}>
          <Radio.Group defaultValue={this.state.search} buttonStyle="solid">
            <Radio.Button onClick={() => this.handleClick('user')} value={'user'}>Gente</Radio.Button>
            <Radio.Button onClick={() => this.handleClick('resource')} value={'resource'}>Títulos</Radio.Button>
            <Radio.Button onClick={() => this.handleClick('review')} value={'review'}>Últimas Reseñas</Radio.Button>
          </Radio.Group>
        </div>
        { 
          this.state.search === 'user' && <UserSearch />
        }
        { 
          this.state.search === 'resource' && <ResourceSearch />
        }
        { 
          this.state.search === 'review' && <ReviewSearch />
        }
      </React.Fragment>
    )
  }
}

export default Search;
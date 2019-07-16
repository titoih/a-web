import React from 'react';
import { List } from 'antd';
import FormPost from './FormPost';

class TitleList extends React.Component {

  render() {
    
    if(this.props.showList !== 'none') {
      return (
        <ul>
        <List size="small" bordered>
          <List.Item onClick={() => this.props.getTitle(this.props.element)}>
            {this.props.element.title}
          </List.Item>
        </List>
        </ul>
      )
    } else {
      return (
      <FormPost elements={this.props.element}/>
      )
    }

  }
}

export default TitleList;
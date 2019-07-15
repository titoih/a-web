import React from 'react';

class TitleList extends React.Component {

  render() {
    return (
      <li style={{listStyleType: "none", border:'1px'}}>
        {this.props.element.title}
      </li>
    )
  }
}

export default TitleList;
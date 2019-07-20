import React from 'react';
import { Card, Row } from 'antd';
const { Meta } = Card;


class Resource extends React.Component {


  render() {
    return (
      <Card
      style={{ width: 300, margin:'1em auto' }}
      cover={
        <img
          alt="name: element.title"
          src={this.props.element.imageURL}
          style={{height:'200px'}}
        />
      }
      >
      <h1>{this.props.element.kind}</h1>
      <Meta
        title={this.props.element.title}
        description={this.props.element.description}
      />
        <Row gutter={1}>
        </Row>
      </Card>
    )
  }
}

export default Resource;
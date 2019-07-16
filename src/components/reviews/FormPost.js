import React from 'react';
import { Form, Rate, Input } from 'antd';
import ResourceSelected from './ResourceSelected';

const { TextArea } = Input;

class FormPost extends React.Component {
  state= {
    state:''
  }
  render() {
    console.log(this.props.elements)
    return (
    <div>
      <ResourceSelected elements={this.props.elements}/>
        <Form style={{display:'block'}}>
          <Form.Item label="Rate">
            <Rate />
            <TextArea type="textarea" rows={4} placeholder="Escribe tu Reseña"/>
          </Form.Item>
        </Form>
    </div>
    )
  }
}

export default FormPost;
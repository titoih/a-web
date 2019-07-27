import React from 'react';
import { Form, Rate, Input } from 'antd';
import { Redirect } from 'react-router-dom';
import ResourceSelected from './ResourceSelected';
import AuthenticationService from '../../services/AuthenticationService';
import { withAuthConsumer } from '../../context/AuthStore';
import TheAntifuckingOne from '../misc/TheAntiFuckingOne';
import { Button } from 'antd';


const { TextArea } = Input;

const desc = ['terrible', 'pss', 'normal', 'buena', 'brutal!'];

class FormPost extends React.Component {
  state = {
    data: {
      user:this.props.user.id,
      resource:this.props.elements.id,
      rate: 3,
      comment:'',
    },
    isPosted:false
  };

  handleChange = event => {
    this.setState({
      data: {
        ...this.state.data,
        rate:event
      }
    })
  };

  handleChangeText = event => {
    this.setState({
      data: {
        ...this.state.data,
        comment:event.target.value
      }
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();
      AuthenticationService.postReviews(this.state.data)
        .then(
          (data) => this.setState({ isPosted: true }),
        )
  }

  render() {
    if(this.state.isPosted) {
      return <Redirect to={`/user/${this.props.user.id}`}/>
    }
    
    return (
    <div>
      <ResourceSelected elements={this.props.elements}/>
        <Form onSubmit={this.handleSubmit} style={{display:'block', clear:'both'}}>
          <Form.Item label="Rate">
          <span>
          <Rate 
          name='rate'
          tooltips={desc} 
          onChange={this.handleChange} 
          value={this.state.data.rate} 
          style={{margin:'auto', fontSize:'50px'}}
          />
          {this.state.data.rate ? <span className="ant-rate-text">{desc[this.state.data.rate - 1]}</span> : ''}
          </span>
            <TextArea 
            name='textarea' 
            onChange={this.handleChangeText} 
            value={this.state.data.comment}
            type="textarea" 
            rows={4} 
            placeholder="Escribe tu Reseña"
            />
            <Button htmlType="submit" type="primary">Publicar</Button>
            <TheAntifuckingOne/>
          </Form.Item>
        </Form>
    </div>
    )
  }
}

export default withAuthConsumer(FormPost);


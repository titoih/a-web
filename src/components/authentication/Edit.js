import React from 'react';
import { Redirect } from 'react-router-dom';
import {
  Form,
  Input,
  Button
} from 'antd';
import { Spin } from 'antd';

import authenticationService from '../../services/AuthenticationService';
import { withAuthConsumer } from '../../context/AuthStore'

class Edit extends React.Component {
  state = {
    user: {
      nickName: '',
      avatar:''      
    },
    errors: {},
    touch: {},
    isEdited: false,
    spin: false
  }



  handleSubmit = (event) => {
    event.preventDefault();
      this.setState({spin:true})
      authenticationService.doEdit(this.state.user)
        .then(
          (user) => {
            this.setState({ isEdited: true, spin:true })
          }
        )
  }

  handleChange = (event) => {
    const { name, value, files } = event.target;
    this.setState({
      user: {
        ...this.state.user,
        [name] : files && files[0] ? files[0] : value
      }
    })
  }

  handleBlur = (event) => {
    const { name } = event.target;
    this.setState({
      touch: {
        ...this.state.touch,
        [name]: true
      }
    })
  }

  componentDidMount() {
    authenticationService.getProfile(this.props.user.id)
      .then(user => this.setState({
        user:{
          nickName:user.nickName
        }
      }))
  }
 
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    
    const { user, errors, isEdited, spin } =  this.state;
    if (isEdited) {
      return <Redirect to={`/user/${this.props.user.id}`} />
    }

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit} >
        <Form.Item label="nickName">
        <div className={`ant-form-item-control ${errors.nickName ? 'has-error' : ''}`}>
          <Input type="text" name="nickName" onChange={this.handleChange} onBlur={this.handleBlur} value={user.nickName} placeholder={this.state.user.nickName}/>
            <div className="ant-form-explain">{ errors.nickName }</div>
        </div>
        </Form.Item>
        <input type="file" id="avatar" name="avatar" onChange={this.handleChange} />
          {
            spin
            ? <Spin size="large" tip="Subiendo Imagen..." /> 
            : <Button type="primary" htmlType="submit">
                Guardar
              </Button>
          }   
      </Form>
    )
  }
}

export default withAuthConsumer(Edit);
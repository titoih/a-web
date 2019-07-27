import React from 'react';
import { Modal, Button } from 'antd';
import AuthenticationService from '../../services/AuthenticationService';
import { withAuthConsumer } from '../../context/AuthStore';
import { Redirect } from 'react-router-dom';

class Logout extends React.Component {

    state = { visible: false, };
  
    showModal = () => {
      this.setState({
        visible: true,
        logout:false
      });
    };
  
    handleOk = () => {
      AuthenticationService.logout()
        .then(() => this.setState({
          visible: false,
          logout:true
        }), this.props.onUserChange({}))
    };
  
    handleCancel = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };

  
    render() {
      const { logout } = this.state;
      if(logout) {
       return <Redirect to='/login'/>
      }
      return (
        <div>
          <Button type="alert" onClick={this.showModal}>
            Logout
          </Button>
          <Modal
            title="¿Quieres Cerrar Sesión?"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
          </Modal>
        </div>
      );
    }
  }

export default withAuthConsumer(Logout);

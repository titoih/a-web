import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import { AuthStore } from './context/AuthStore';

ReactDOM.render(
  <Router>
  <AuthStore>
    <App/>
  </AuthStore>
  </Router>, 
document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProviderWrapper } from '../src/context/auth.context';


import { BrowserRouter as Router } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <AuthProviderWrapper>
    <Router>
      <App />
    </Router>
  </AuthProviderWrapper>
)

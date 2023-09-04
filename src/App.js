import React from 'react';
import './styles.css';
import Container from './components/home/container';
import Home from './components/home/home';
import Customers from './components/customers/customers';
import {BrowserRouter, Route} from 'react-router-dom';

///
function App(){
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={ Home } />
        <Route path="/customers" component={ Customers } />
        <Route path="/container" component={ Container } />
      </BrowserRouter>
    </div>

  )
}

///

export default App;

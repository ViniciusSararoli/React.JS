import React, { Component } from 'react';
//import api from './services/api';
import Routes from './routes'

import "./style.css";

import Header from "./components/Header";
import Main from './pages/main';

//import React from 'react';

const App = () => (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
//<Main /> estava no lugar do <Routes />

export default App;

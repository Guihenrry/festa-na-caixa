import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './styles/global.css';

import Header from './components/Header';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes />
    </Router>
  );
};

export default App;

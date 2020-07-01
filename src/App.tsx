import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from './styles/global';
import Header from './components/Header';
import Steps from './components/Steps';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Steps />
      <Routes />
    </Router>
  );
};

export default App;

import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import history from './services/history';
import GlobalStyles from './styles/globalStyles';
import Head from './components/header';
import Routes from './routers';

function App() {
  return (
    <Router history={history}>
      <Head />
      <Routes />
      <GlobalStyles />
      <ToastContainer autoClose={3000} className="toast-container" />
    </Router>
  );
}

export default App;

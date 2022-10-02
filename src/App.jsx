import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/globalStyles';
import Head from './components/header';
import Routes from './routers';

function App() {
  return (
    <BrowserRouter>
      <Head />
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;

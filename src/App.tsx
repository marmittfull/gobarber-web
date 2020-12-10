import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Routes from './routes';
import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
      <Router>
        <Routes />
      </Router>
    </AppProvider>
    <GlobalStyle />
  </>
);

export default App;

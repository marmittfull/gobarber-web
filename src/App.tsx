import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;

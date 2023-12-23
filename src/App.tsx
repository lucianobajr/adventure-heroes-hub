import React from 'react';
import { BrowserRouter } from "react-router-dom";

import ThemeContextWrapper from './contexts/theme/ThemeContextWrapper';
import Routes from './routes';
import { AuthProvider } from './contexts/auth/AuthContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ThemeContextWrapper>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeContextWrapper>
    </AuthProvider>
  );
}

export default App;
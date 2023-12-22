import React from 'react';
import { BrowserRouter } from "react-router-dom";

import ThemeContextWrapper from './contexts/theme/ThemeContextWrapper';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <ThemeContextWrapper>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeContextWrapper>
  );
}

export default App;
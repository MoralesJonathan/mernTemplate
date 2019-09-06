import React from 'react';
import Theme from './ui/theme';
import Index from './views/Index';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <div>
          <Route exact path="/" component={Index} />
        </div>
      </Router>
    </ThemeProvider>
  );
}
    
export default App;
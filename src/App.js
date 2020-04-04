import React from 'react';
import Page from './Page';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const GlobalStyles = createGlobalStyle`
  body {
    min-height: 100vh;
    background: linear-gradient(to bottom, #000 54px, #007 96px);
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Router>
        <Switch>
          <Route key="/" path="/">
            <Page />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';
import IndexPage from './IndexPage';
import HavePage from './HavePage';
import MakePage from './MakePage';
import NeedPage from './NeedPage';

const GlobalStyles = createGlobalStyle`
  body {
    min-height: 100vh;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #D1E0E3;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Router>
      <Header />
        <Switch>
          <Route key="/have" path="/have">
            <HavePage />
          </Route>
          <Route key="/make" path="/make">
            <MakePage />
          </Route>
          <Route key="/need" path="/need">
            <NeedPage />
          </Route>
          <Route key="/" path="/">
            <IndexPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

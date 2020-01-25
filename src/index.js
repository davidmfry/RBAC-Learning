import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './components/pages/home';
import DashboardPage from './components/pages/dashboard';

function App() {
  return (
    <div className="App container">
      <div className="jumbotron">
        <Router>
          <Switch>
            <Route exact path={`/`} component={HomePage} />
            <Route path={`/`} component={DashboardPage} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDom.render(<App />, rootElement);

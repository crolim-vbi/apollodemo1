import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HashRouter } from 'react-router-dom'


import CoresVbi from './shared/CoresVbi';
import { createMuiTheme,  ThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme(
  {
    palette: {
      primary: CoresVbi.azulVbi1,
      secondary: CoresVbi.laranjaVbi1,
  },
});


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <HashRouter>
          <Route path="/" component={App} />
        </HashRouter>
      </Switch>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);





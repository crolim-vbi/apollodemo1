import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { orange, green } from '@material-ui/core/colors';

import Checkbox from '@material-ui/core/Checkbox';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#bcbdc0',
      main: '#77787b',
      dark: '#636464',
      contrastText: '#fff',
    },
    secondary: {
      light: '#33918a',
      main: '#00766d',
      dark: '#00524c',
      contrastText: '#fff',
    },
  },
});

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HashRouter } from 'react-router-dom'


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <HashRouter>
          {/* <Checkbox /> */}
          <Route path="/" component={App} />
        </HashRouter>
      </Switch>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);

// render(<Sample />, document.getElementById('root'));






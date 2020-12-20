import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { orange, green } from '@material-ui/core/colors';

import Checkbox from '@material-ui/core/Checkbox';

// Cores Institucionais

const pretoVbi ={
  light: '#2c2c2c',
  main: '#000000',
  dark: '#000000',
  contrastText: '#fff',
}


const cinzaVbi1 ={
  light: '#909292',
  main: '#636464',
  dark: '#393a3a',
  contrastText: '#fff',
}

const cinzaVbi2 ={
  light: '#a6a7aa',
  main: '#77787b',
  dark: '#4b4c4f',
  contrastText: '#fff',
}


const cinzaVbi3 ={
  light: '#cacccf',
  main: '#999b9e',
  dark: '#6b6d70',
  contrastText: '#fff',
}


const cinzaVbi4 ={
  light: '#eeeff3',
  main: '#bcbdc0',
  dark: '#8c8d90',
  contrastText: '#fff',
}



const cinzaVbi5 = {
  light: '#ffffff',
  main: '#d1d3d4',
  dark: '#a0a2a3',
  contrastText: '#fff',
}


const fakeAzulVbiDark = {
  light: '#4a83bd',
  main: '#00578d',
  dark: '#002f5f',
  contrastText: '#fff',
}


// Cores De Apoio


const laranjaVbi1 = {
  light: '#ffce53',
  main: '#f99d1c',
  dark: '#c06e00',
  contrastText: '#fff',
}


const laranjaVbi2 = {
  light: '#fff453',
  main: '#ffc20e',
  dark: '#c79200',
  contrastText: '#fff',
}


const azulVbi1 = {
  light: '#66e5ff',
  main: '#00b3f0',
  dark: '#0083bd',
  contrastText: '#fff',
}


const azulVbi2 = {
  light: '#a2acf0',
  main: '#717dbd',
  dark: '#41518d',
  contrastText: '#fff',
}

const verdePetroleo ={
  light: '#58dbce',
  main: '#00a99d',
  dark: '#00796f',
  contrastText: '#fff',
}

const verdeFogo = {
  light: '#e8ff6a',
  main: '#b3d335',
  dark: '#80a200',
  contrastText: '#000'
}



const theme = createMuiTheme({
  palette: {
    primary: cinzaVbi1,
    secondary: verdePetroleo,
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






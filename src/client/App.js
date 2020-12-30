
import React from 'react';
import './App.css';
import Home from './pages/Home';
import Consulta from './pages/Consultar';
import Inserir from './pages/Inserir';
import Preferencias from './pages/Preferencias';
import Ajuda from './pages/Ajuda';
import NaoEncontrado from './pages/NaoEncontrado';
import ConsultaResultado from './pages/ConsultaResultado';
import DocumentoVisualizacao from './pages/DocumentoVisualizacao';
import Login from './pages/Login/Login';
import MinhaConta from './pages/minhaConta';
import LogDeAtividades from './pages/logDeAtividades';


import { Route, Switch, Redirect  } from 'react-router-dom';




const App = function() {

  
    return (<>
          
      <Switch>
        <Route path="/consultar" component={Consulta}/>
        <Route path="/inserir" component={Inserir}/>
        <Route path="/preferencias" component={Preferencias}/>
        <Route path="/ajuda" component={Ajuda}/>
        <Route path="/ConsultaResultado" component={ConsultaResultado}/>
        <Route path="/DocumentoVisualizacao" component={DocumentoVisualizacao}/>
        <Route path="/home" component={Home}/>
        <Route path="/minhaConta" component={MinhaConta}/>
        <Route path="/logDeAtividades" component={LogDeAtividades}/>
        <Route path="/login" component={Login}/>
        <Route exact path="/" render={() => (<Redirect to="/login" />)}/>
        <Route path="/" component={NaoEncontrado}/>
      </Switch>
      
    </>);
  }


export default App;

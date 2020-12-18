
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



import { Route, Switch } from 'react-router-dom';




const App = function() {

  
    return (<>
          
      <Switch>
        <Route path="/consultar" component={Consulta}/>
        <Route path="/inserir" component={Inserir}/>
        <Route path="/preferencias" component={Preferencias}/>
        <Route path="/ajuda" component={Ajuda}/>
        <Route path="/ConsultaResultado" component={ConsultaResultado}/>
        <Route path="/DocumentoVisualizacao" component={DocumentoVisualizacao}/>

        <Route exact path="/" component={Home}/>
        <Route path="/" component={NaoEncontrado}/>
      </Switch>
      
    </>);
  }


export default App;


import React from 'react';
import './App.css';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Consulta from './pages/Consultar';
import Inserir from './pages/Inserir';
import Preferencias from './pages/Preferencias';
import Ajuda from './pages/Ajuda';
import NaoEncontrado from './pages/NaoEncontrado';
import ConsultaResultado from './pages/ConsultaResultado';

import { Route, Switch } from 'react-router-dom';




const App = function() {

  
    return (<>
      
      <Layout style={{marginBottom: "20px"}}>
        <Switch>
          <Route path="/consultar" component={Consulta}/>
          <Route path="/inserir" component={Inserir}/>
          <Route path="/preferencias" component={Preferencias}/>
          <Route path="/ajuda" component={Ajuda}/>
          <Route path="/ConsultaResultado" component={ConsultaResultado}/>
          <Route exact path="/" component={Home}/>
          <Route path="/" component={NaoEncontrado}/>
        </Switch>
      </Layout>
    
    
    </>);
  }


export default App;

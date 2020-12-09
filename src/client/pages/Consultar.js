import React from 'react';
import Layout from '.././layout/Layout';
import Consulta from '../partials/Consulta';



const App = function() {

  
    return (<>
      <Layout titulo="Consultar Documentos" >

        <Consulta />

        <div Style={{marginBottom: "20px"}}> &nbsp; </div>
      </Layout>
    
    </>);
  }


export default App;

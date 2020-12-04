import React from 'react';
import Layout from '.././layout/Layout';
import Consulta from '../partials/Consulta';



const App = function() {

  
    return (<>
      <Layout titulo="Fazer pesquisa" subTitulos={["Consultar"]}>

        <Consulta />

        <div Style={{marginBottom: "20px"}}> &nbsp; </div>
      </Layout>
    
    </>);
  }


export default App;

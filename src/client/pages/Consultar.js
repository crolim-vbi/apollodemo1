import React from 'react';
import Layout from '.././layout/Layout';
import Consulta from '../partials/Consulta';



const App = function() {

  
    return (<>
      <Layout titulo="Pesquisar Documentos" >

        <div style={{paddingTop: "0px"}}>
          <Consulta />
        </div>
        
        
      </Layout>
    
    </>);
  }


export default App;

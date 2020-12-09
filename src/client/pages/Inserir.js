import React from 'react';
import Layout from '.././layout/Layout';
import Dropzone from '../Components/Dropzone';
import Stepper from '../Components/Stepper';

const App = function() {

  
    return (<>
      <Layout titulo="Carregar Documentos" >

        <div style={{marginBottom: "25px"}}>  </div>

        <Dropzone />

        <div style={{height: "25px"}}>  </div>

      </Layout>
    
    </>);
  }


export default App;

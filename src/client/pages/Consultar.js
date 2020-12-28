import React from 'react';
import Layout from '.././layout/Layout';
import Consulta from '../partials/Consulta';



const App = function() {

  
    return (<>
      <Layout titulo="" >

        <div style={{maxWidth: "960px"}}>
          <Consulta />
        </div>
        
        
      </Layout>
    
    </>);
  }


export default App;

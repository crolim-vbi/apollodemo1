import React from 'react';
import Layout from '.././layout/Layout';

import Paper from '@material-ui/core/Paper';


const App = function() {

  
    return (<>
      <Layout titulo="Minhas Notificações">

        <div style={{maxWidth: "960px"}}>
          <a style={{color:"dimgray", fontSize: "0.875rem", marginBottom: "5px", display: "block"}} >
            Você será notificado via e-mail sobre os novos documentos conforme as regras de notificações abaixo.</a>
          <a style={{color:"dimgray", fontSize: "0.875rem", marginBottom: "5px", display: "block"}} >
            Mas você pode alterar ou criar novas regras quando desejar. Utilize as opções disponíveis nesta página.</a>
        </div>
      
      </Layout>
    
    </>);
  }


export default App;

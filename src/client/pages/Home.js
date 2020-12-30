
import React from 'react';
import Layout from '.././layout/Layout';

import Consulta from '.././partials/Consulta';
import Highlights from '.././partials/Highlights';
import Highlights2 from '.././partials/Highlights2';



const App = function() {

    return (
      <Layout titulo="Sistema Apollo Lunar">

        {/* <Consulta /> */}

        <a style={{color: "dimgray", display: "block", margin: "10px 0px 15px", fontWeight: "600", fontSize: "1rem"}}>Mais Utilizados</a>

        <Highlights2/>

        <a style={{color: "dimgray", display: "block", margin: "10px 0px 15px", fontWeight: "600", fontSize: "1rem"}}>Documentos Recentes</a>

        <Highlights />


      </Layout>
    );
  }


export default App;

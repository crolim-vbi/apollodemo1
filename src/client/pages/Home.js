
import React from 'react';
import Layout from '.././layout/Layout';

import Consulta from '.././partials/Consulta';
import Highlights from '.././partials/Highlights';



const App = function() {

    return (
      <Layout titulo="Overview" subTitulos={["Início"]}>

        <Consulta />

        <Highlights />

        <div Style={{marginBottom: "20px"}}> &nbsp; </div>
      </Layout>
    );
  }


export default App;

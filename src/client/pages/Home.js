
import React from 'react';
import Consulta from '.././partials/Consulta';
import Highlights from '.././partials/Highlights';



const App = function() {

  
    return (<>

        <h2 style={{fontWeight: "600", marginTop: "0px", paddingTop: "20px"}}>Início</h2>

        <Consulta />

        <Highlights />

        <div Style={{marginBottom: "20px"}}> &nbsp; </div>
    
    </>);
  }


export default App;

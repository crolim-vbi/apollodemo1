import React from 'react';

import Navbar from '../partials/Navbar';
import Footer from '../partials/Footer';





const Titulo = (props) => {
  return(
    <h2 style={{fontWeight: "550", marginTop: "0px"}}>{props.titulo}</h2>
  )
}


const Layout = (props) => {
  
    return (
      <>
        <Navbar />
        
        <div className="mainWrap">
          <div className="maxScreenWidth">
            
            <br></br>
      
            <Titulo titulo={props.titulo}/>
            
            {props.children}

          </div>
        </div>
        
        <Footer />
      </>
    );
  };


  export default Layout;  
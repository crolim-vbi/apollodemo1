import React from 'react';

import Navbar from '../partials/Navbar/Navbar';
import Footer from '../partials/Footer/Footer';



const Titulo = (props) => {
  return(
    <h2 style={{fontWeight: "550"}}>{props.titulo}</h2>
  )
}


const Layout = (props) => {
  
    return (
      <div className="globalWrap">

        <Navbar />
        
        <div className="mainWrap">
          <div className="maxScreenWidth">
            
            <div style={{height: "10px"}}></div>
      
            <Titulo titulo={props.titulo}/>

            <div style={{height: "10px"}}></div>
            
            {props.children}

          </div>
        </div>
        
        <Footer />
        
      </div>
    );
  };


  export default Layout;  
import React from 'react';

import Navbar from '../partials/Navbar/Navbar';
import Footer from '../partials/Footer/Footer';



const Titulo = (props) => {
  return(
    <>
      <div style={{padding: "10px 0px"}}>
        <h2 style={{fontWeight: "550"}}>{props.titulo}</h2>
      </div>
    </>
  )
}


const Layout = (props) => {
  
    return (
      <div className="globalWrap">
        <Navbar />
        
        <div className="mainWrap">
          <div className="maxScreenWidth">      

            <Titulo titulo={props.titulo}/>
            
            {props.children}

          </div>
        </div>
        
        <Footer />
      </div>
    );
  };


  export default Layout;  
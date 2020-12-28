import React from 'react';

import Navbar from '../partials/Navbar/Navbar';
import Footer from '../partials/Footer/Footer';

import Paper from '@material-ui/core/Paper';

const Titulo = (props) => {
  return(
    props.titulo ?
      <div elevation={0} style={{ padding: "25px 30px 0px", margin: "0px 0px 0px", backgroundColor: "hsla(0,0%,100%,0)", borderRadius: "0px"}} >
        <div  style={{  border: "solid 1px lightgray", padding: "25px 0px", borderBottom: "none", borderRadius: "4px 4px 0px 0px"}}>
          &nbsp;&nbsp;&nbsp;<a style={{fontWeight: "550", fontSize: "1.25rem"}}>{props.titulo}</a>
        </div>
      </div>
      :
      <div style={{margin: "0px 0px 35px"}} >
        
      </div>

  
  )
}


const Layout = (props) => {
  
    return (
      <div className="globalWrap">
        <Navbar />
        
        <Titulo titulo={props.titulo}/>

        <div className="mainWrap" >
          <div className="maxScreenWidth"  style={{border: "solid 1px lightgray", padding: "25px", marginBottom: "25px", borderRadius: "0px 0px 4px 4px"}}>    
            {props.children}
          </div>
        </div>
        
        <Footer />
      </div>
    );
  };


  export default Layout;  
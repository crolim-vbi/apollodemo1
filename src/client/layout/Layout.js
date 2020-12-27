import React from 'react';

import Navbar from '../partials/Navbar/Navbar';
import Footer from '../partials/Footer/Footer';

import Paper from '@material-ui/core/Paper';

const Titulo = (props) => {
  return(
    <Paper elevation={0} style={{padding: "0px 30px", borderBottom: "solid 1px lightgray", margin: "0px 0px 25px", backgroundColor: "hsla(0,0%,0%,0)", borderRadius: "0px"}} >
      <div  style={{  padding: "25px 0px"}}>
          <a style={{fontWeight: "550", fontSize: "1.25rem"}}>{props.titulo}</a>
      </div>
    </Paper>
  
  )
}


const Layout = (props) => {
  
    return (
      <div className="globalWrap">
        <Navbar />
        
        <Titulo titulo={props.titulo}/>

        <div className="mainWrap" >
          <div className="maxScreenWidth">    
            {props.children}
          </div>
        </div>
        
        <Footer />
      </div>
    );
  };


  export default Layout;  
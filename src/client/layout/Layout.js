import React from 'react';

import Navbar from '../partials/Navbar/Navbar';
import Footer from '../partials/Footer/Footer';

import Paper from '@material-ui/core/Paper';

const Titulo = (props) => {
  return(
    props.titulo ?
      <Paper elevation={0} style={{padding: "0px 30px", margin: "0px 0px 25px", backgroundColor: "hsla(0,0%,100%,0)", borderRadius: "0px"}} >
        <div  style={{  padding: "25px 0px", borderBottom: "solid 1px lightgray"}}>
            <a style={{fontWeight: "600", fontSize: "1.25rem"}}>{props.titulo}</a>
        </div>
      </Paper>
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
          <div className="maxScreenWidth">    
            {props.children}
          </div>
        </div>
        
        <Footer />
      </div>
    );
  };


  export default Layout;  
import React from 'react';

import Navbar from '../partials/Navbar/Navbar';
import Footer from '../partials/Footer/Footer';

import Paper from '@material-ui/core/Paper';

const Titulo = (props) => {

  let maxScreenWidthValue="maxScreenWidth"

  if (props.zpto) {maxScreenWidthValue="maxScreenWidth2"} 

  

  return(
    props.titulo 
      ?
        <Paper elevation={0} style={{  padding: "0px 30px", margin: "35px 0px 25px", backgroundColor: "hsla(0,0%,100%,0)", borderRadius: "0px"}} >
          <div className={maxScreenWidthValue} style={{  padding: "0px 0px", borderBottom: "solid 1px lightgray2"}}>
              <a style={{fontWeight: "600", fontSize: "1.25rem"}}>{props.titulo}</a>
          </div>
        </Paper>
      :
        <div style={{margin: "35px 0px 0px"}} ></div>

  
  )
}


const Layout = (props) => {
  
    return (
      <div className="globalWrap">
        <Navbar />
        
        <Titulo titulo={props.titulo} zpto={props.zpto}/>

        <div className="mainWrap" >
          <div className="maxScreenWidth">    
            {props.children}
          </div>
        </div>

        <div style={{marginBottom: "35px"}}> &nbsp; </div>
        
        <Footer />
      </div>
    );
  };


  export default Layout;  
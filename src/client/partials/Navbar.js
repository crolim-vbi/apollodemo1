
import React from 'react';
import UserIcon from '.././Components/UserIcon';
import { makeStyles } from '@material-ui/core/styles';
import apollo_lunar_logo from "./apollo_lunar_logo.png"

import { Link } from 'react-router-dom';

const Navbar = function() {

  const useStyles2 = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontWeight: 500,
      color: "black"
    },
    pos: {
      marginBottom: 12,
    },
  });



  const classes2 = useStyles2();

  
    return (
    
    <>
      {/* <Container maxWidth="100%" style={{backgroundColor: "yellow"}}>
        <a>teste</a>
      </Container> */}



        

        <div className="topWrap">

          <div className="header">
            <div><img src={apollo_lunar_logo} height="60px" /></div>
            
            <div className="topNav">

              {/* <Link to="/"><a>Início</a></Link> */}
              <a href="/">Início</a>
              <a href="/consultar">Consultar</a>
              <a href="/inserir">Inserir</a>
              <a href="/preferencias">Preferências</a>
              <a href="/ajuda">Ajuda</a>
              <a><UserIcon /></a>
            </div>    
            
          </div>

   



      </div>
    </>
    
    );
  }


export default Navbar;


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

        

        <div className="topWrap">

          <div className="header maxScreenWidth">
            <div className="zpto"><Link to="/" ><img src={apollo_lunar_logo} height="60px" /></Link></div>
            
            <div className="topNav">
              <Link to="/" >Início</Link>
              <Link to="/consultar" >Consultar</Link>
              <Link to="/inserir" >Inserir</Link>
              <Link to="/preferencias" >Preferências</Link>
              <Link to="/ajuda" >Ajuda</Link>
              <a><UserIcon /></a>
            </div>    
            
          </div>

      </div>
    </>
    
    );
  }


export default Navbar;

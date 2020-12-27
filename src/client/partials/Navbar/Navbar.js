
import React from 'react';
import UserIcon from '../../components/UserIcon';
import apollo_lunar_logo from "./apollo_lunar_logo.png"

import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';


const Navbar = function() {

    return (
    
    <>
        <Paper elevation={3}>

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

        </ Paper>   
        
    </>
    
    );
  }


export default Navbar;

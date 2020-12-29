
import React from 'react';
import UserIcon from '../../components/UserIcon';
import apollo_lunar_logo from "./apollo_lunar_logo.png"

import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';


const Navbar = function() {

    return (
    
    <>
        <Paper elevation={6} className="topWrap" style={{borderRadius: "0px"}}>

            <div className="header maxScreenWidth" >
              <div className="topNav" >
                <Link to="/" ><img src={apollo_lunar_logo} height="60px" /></Link>
              </div>          
            </div>

            <div className="header" style={{ padding: "0px",  borderTop: "solid 1px gray"}}></div>

            <div className="header maxScreenWidth" style={{paddingTop: ""}}>
           
              <div className="topNav" >
                <Link to="/" >Início</Link>
                <Link to="/consultar" >Consultar</Link>
                <Link to="/inserir" >Inserir</Link>
                <Link to="/preferencias" >Preferências</Link>
                <Link to="/ajuda" >Ajuda</Link>
                <a style={{padding: "0px"}}><UserIcon /></a>
              </div>    
              
            </div>            

        </ Paper>   
        
    </>
    
    );
  }


export default Navbar;

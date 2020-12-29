
import React from 'react';
import UserIcon from '../../components/UserIcon';
import apollo_lunar_logo from "./apollo_lunar_logo.png"

import { Link , NavLink, useLocation } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';


const Navbar = function() {

    const location = useLocation();
    const path = location.pathname;

    return (
    
    <>
        <Paper elevation={4} className="topWrap" style={{borderRadius: "0px"}}>

            <div className="header maxScreenWidth" style={{}}>
              <div className="topNav" >
                <span><Link to="/home" ><img src={apollo_lunar_logo} height="60px" /></Link></span>
              </div>          
            </div>


            {path === "/login" 
              ? 
                  <></>
              :
                  <div className="header maxScreenWidth" style={{borderTop: "solid 1px dimgray"}}>
            
                    <div className="topNav" >
                      <NavLink exact to="/home" >Início</NavLink>
                      <NavLink exact to="/consultar" >Consultar</NavLink>
                      <NavLink exact to="/inserir" >Inserir</NavLink>
                      <NavLink exact to="/preferencias" >Preferências</NavLink>
                      <NavLink exact to="/ajuda" >Ajuda</NavLink>
                      <span><a style={{padding: "12px 0px", marginRight: "0px"}}><UserIcon /></a></span>
                    </div> 
                  </div>  
            }     

        </ Paper>   
        
    </>
    
    );
  }


export default Navbar;

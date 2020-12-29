
import React from 'react';
import UserIcon from '../../components/UserIcon';
import apollo_lunar_logo from "./apollo_lunar_logo.png"

import { Link , NavLink} from 'react-router-dom';

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
                <NavLink exact to="/" >Início</NavLink>
                <NavLink exact to="/consultar">Consultar</NavLink>
                <NavLink exact to="/inserir" >Inserir</NavLink>
                <NavLink exact to="/preferencias" >Preferências</NavLink>
                <NavLink exact to="/ajuda" >Ajuda</NavLink>
                <a style={{padding: "0px"}}><UserIcon /></a>
              </div>    
              
            </div>            

        </ Paper>   
        
    </>
    
    );
  }


export default Navbar;

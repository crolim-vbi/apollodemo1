
import React from 'react';
import UserIcon from '../../components/UserIcon';
import apollo_lunar_logo from "./apollo_lunar_logo.png"

import { Link } from 'react-router-dom';

const Navbar = function() {

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

import LogoImage from './apollo_lunar_logo.png';
import UserAvatar from './user_avatar.png';

import React from 'react';
import './styles.css';

const Navbar = () => {


  return (
      <>
          <div className="header">
            <div><img src={LogoImage} height="60px" /></div>
            <div><img src={UserAvatar} height="30px" style={{borderRadius: '50%'}} /></div>
          </div>
          <div className="top-nav">
            <a href="#" className="top-nav-selecionado">Consultar</a>
            <a href="#">Inserir</a>
            <a href="#">Configurações</a>
            <a href="#">Ajuda</a>          
          </div>    
      </>

  );
};

export default Navbar
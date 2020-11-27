import LogoImage from './apollo_lunar_logo.png';

import React from 'react';
import './styles.css';

const Navbar = () => {

  const shoot = () => {
    alert("Este módulo ainda está em desenvolvimento");
  }

  return (
    <div className="container1">
      <nav className="navbar" style={{
        // maxWidth: "1000px",
        display: "flex", 
        justifyContent:"space-between", 
        padding: "20px 48px"}}>
        
        <img src={LogoImage} height="60px"/>
        {/* <h3 className="logo">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sistema de Gerenciamento de Documentos</h3> */}
        
        <div>
          {/* <div style={{margin: "auto", display: "inline-block"}}>
            <img className="avatar" src="logo192.png" />
          </div> */}
          {/* <div style={{fontSize: "20px", display: "inline-block"}}>
            <li  className="nav-item">
              <a href="#">Sair</a>
            </li>
          </div> */}
        </div>
  
      </nav>

      <div  style={{
        borderBottom: "1px solid white"}}>
      </div>


      <nav className="navbar" style={{ maxWidth: "1000px"}}>
        
          
          <ul className="nav-links flex-1" style={{ margin: "0px", padding: "0px"}}>

            
   
                <li className="nav-item" onClick={shoot}>
                  <a href="/#">Consultar</a>
                </li>
                <li className="nav-item" onClick={shoot}>
                  <a href="/#">Inserir</a>
                </li>
                <li className="nav-item" onClick={shoot}>
                  <a href="/#">Configurações</a>
                </li>
                <li className="nav-item" onClick={shoot}>
                  <a href="/#">Ajuda</a>
                </li>                                                
                {/* <li className="nav-item">
                  <a href="/users">Usuários</a>
                </li>                
                <li className="nav-item">
                  <a href={`/${auth.me.username}`}>Perfil</a>
                </li> */}

                {/* <li className="flex-1" />
                <img className="avatar" src="logo192.png" />
                <li className="nav-item">
                  <a href="#">Sair</a>
                </li> */}
   

          </ul>
        
      </nav>



    </div>
  );
};

export default Navbar
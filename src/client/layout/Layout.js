import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../components/Navbar/Navbar';
import Navbar2 from '../components/Navbar2/Navbar2';
import Footer from '../components/Footer/Footer';

import apollo_lunar_logo from "./apollo_lunar_logo.png";
import logo_vbi from "./logo_vbi.png";
import background_footer_vbi from "./background_footer_vbi.png";

import './styles.css';

const style = {
  backgroundImage: `url(${background_footer_vbi})`,
}

const Layout = (props) => {
  return (

      <div>
        <div className="top-row" style={style}>
          <div className="header">
            <div><img src={apollo_lunar_logo} height="60px" /></div>
            {/* <div><img src="user_avatar.png" height="30px" style={{borderRadius: '50%'}} /></div> */}
          </div>
          <div className="top-nav">
            <a href="#" className="top-nav-selecionado">Consultar</a>
            <a href="#">Inserir</a>
            <a href="#">Configurações</a>
            <a href="#">Ajuda</a>          
          </div>    
        </div>
        <div className="top-row2">
          <div className="top-nav2">
            <Navbar2 />
          </div>  
        </div>
        <div className="main-row">
          <div className="main">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>    
        </div>
        <div className="bottom-row" style={style}>
          <div className="footer1">
            <img src={logo_vbi} height="35px" />
            <div style={{height: '100%', textAlign: 'right'}}>
              <div style={{padding: '12px 0px 8px'}}> apollo@vbirealestate.com </div>
              <div> 55 11 2344 - 2525 </div>
            </div>
          </div>
          <div className="footer2">
            <div style={{padding: '12px 0px 8px'}}> COPYRIGHT © 2017 - 2020 - VBI REAL ESTATE</div>
            <div> Apollo27 é um sistema desenvolvido pela VBI Real Estate </div>
          </div>            
        </div>
      </div>

  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;



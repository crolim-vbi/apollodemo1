
import React from 'react';
import logo_vbi from "./logo_vbi.png"

import Paper from '@material-ui/core/Paper';


const Footer = function() {

  
    return (
        <Paper elevation={6} className="bottomWrap" style={{borderRadius: "0px"}}>
          <div className="footer1 maxScreenWidth2">
            <img src={logo_vbi} height="35px" />
          </div>
          <div className="footer2 maxScreenWidth">
            <a style={{display: "inline-block", marginBottom: "10px"}}> Apollo27 é um sistema desenvolvido pela VBI Real Estate </a> <br></br>
            <a style={{display: "inline-block", marginBottom: "0px"}}> COPYRIGHT © 2017 - 2020 - VBI REAL ESTATE - dev@vbirealestate.com</a> <br></br>
          </div>       
        </Paper>
    );
  }


export default Footer;

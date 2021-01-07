
import React from 'react';
import logo_vbi from "./logo_vbi.png"

import Paper from '@material-ui/core/Paper';

import { useLocation } from 'react-router-dom';



const Footer = function() {

  const location = useLocation();
  const path = location.pathname;
  
    return (
        <Paper elevation={4} className="bottomWrap" style={{borderRadius: "0px"}}>
          <div className="footer1 maxScreenWidth">
            <a href="https://vbirealestate.com/" target="_blank"><img src={logo_vbi} height="35px" /></a>
          </div>
          {path === "/login" 
              ? 
                  <></>
              :
               <div className="footer2 maxScreenWidth">
                <a style={{display: "inline-block", marginBottom: "10px"}}> Apollo27 é um sistema desenvolvido pela VBI Real Estate </a> <br></br>
                <a style={{display: "inline-block", marginBottom: "0px"}}> COPYRIGHT © 2017 - 2020 - VBI REAL ESTATE - dev@vbirealestate.com</a> <br></br>
              </div>
          }
        </Paper>
    );
  }


export default Footer;

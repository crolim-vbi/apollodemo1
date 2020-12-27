
import React from 'react';
import logo_vbi from "./logo_vbi.png"

import Paper from '@material-ui/core/Paper';


const Footer = function() {

  
    return (
        <Paper elevation={3} className="bottomWrap" style={{borderRadius: "0px"}}>
          <div className="footer1 maxScreenWidth">
            <img src={logo_vbi} height="35px" />
            <div style={{height: '100%', textAlign: 'right'}}>
              <div style={{padding: '12px 0px 8px'}}> dev@vbirealestate.com </div>
              <div> 55 11 2344 - 2525 </div>
            </div>
          </div>
          <div className="footer2 maxScreenWidth">
            <div style={{padding: '12px 0px 8px'}}> COPYRIGHT © 2017 - 2020 - VBI REAL ESTATE</div>
            <div> Apollo27 é um sistema desenvolvido pela VBI Real Estate </div>
          </div>       
        </Paper>
    );
  }


export default Footer;

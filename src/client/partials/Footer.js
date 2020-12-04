
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo_vbi from "./logo_vbi.png"



const Footer = function() {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      alignItems: "center",
      margin: "0px 30px",
      backgroundColor: "#eee",
      border: "solid 1px transparent"
    },
    paper: {
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2)
    },
  }));

  const useStyles2 = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontWeight: 500,
      color: "black"
    },
    pos: {
      marginBottom: 12,
    },
  });

  const classes = useStyles();

  const classes2 = useStyles2();
  const bull = <span className={classes2.bullet}>•</span>;
  
    return (
    
    <>
  
        <div className="bottomWrap">
          <div className="footer1 maxScreenWidth">
            <img src={logo_vbi} height="35px" />
            <div style={{height: '100%', textAlign: 'right'}}>
              <div style={{padding: '12px 0px 8px'}}> apollo@vbirealestate.com </div>
              <div> 55 11 2344 - 2525 </div>
            </div>
          </div>
          <div className="footer2 maxScreenWidth">
            <div style={{padding: '12px 0px 8px'}}> COPYRIGHT © 2017 - 2020 - VBI REAL ESTATE</div>
            <div> Apollo27 é um sistema desenvolvido pela VBI Real Estate </div>
          </div>       
        </div>
      
    </>
    
    );
  }


export default Footer;

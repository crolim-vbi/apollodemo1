import React from 'react';
import Navbar from '../../partials/Navbar/Navbar';
import Footer from '../../partials/Footer/Footer';

import apollo_lunar_logo from "./apollo_lunar_logo.png"

import Checkbox from '@material-ui/core/Checkbox';


import Layout from '../../layout/Layout';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import GoogleIcon from "../../shared/customIcons/GoogleIcon/GoogleIcon"

import Paper from '@material-ui/core/Paper';


import astronautWelcome from "./astronaut_welcome.png"

import AccountCircle from '@material-ui/icons/AccountCircle';

import LockOpenIcon from '@material-ui/icons/LockOpen';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LockIcon from '@material-ui/icons/Lock';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';



const App = function() {

  
    return (
      <div className="globalWrap" id="login-page">

          <Navbar /> 

          <div  style={{display: "flex", margin: "auto", width: "100%", flex: "1", position: "relative", alignSelf: "stretch"}}>
            <div style={{display: "inline-block", textAlign: "center", margin: "auto", padding: "24px", maxWidth: "380px"}}>

                <div style={{borderBottom: "solid 1px lightgray2", marginBottom: "35px"}}>
                  <a style={{fontWeight: "600", fontSize: "1.25rem"}}>Bem-Vindo ao Sistema Apollo Lunar</a>
                </div>

            
                <Paper id="" elevation={2} style={{padding: "32px 25px 0px"}}>

                  {/* <img src={astronautWelcome} style={{width: "90px",  marginBottom: "25px"}}></img> */}

                  <AccountCircle fontSize="large" color="" style={{ marginBottom: "8px", color: ""}}/>

                  <div style={{color:"dimgray", marginBottom: "32px", fontSize: "0.875rem"}}>
                      <a> Será necessária uma conta @vbirealestate.com. </a> 
                      <a> Caso possua, favor identifique-se no botão abaixo. </a>
                  </div>
                  

                  <div style={{marginBottom: "24px",  borderBottom: "solid 1px lightgray"}}> </div>

                  <Button href="/#/home" variant="contained" color="primary" style={{marginBottom: "0px"}}><ExitToAppIcon /> &nbsp; Fazer login com Google</Button>
                  
                  <div style={{marginBottom: "24px"}}>
                    <Checkbox
                      defaultChecked
                      inputProps={{ 'aria-label': 'secondary checkbox' }}
                      size="small"
                      style={{color:"dimgray"}}
                      // color="secondary"
                    />    
                    <a style={{color:"dimgray", fontSize: "0.875rem"}}>Lembrar login</a>
                  </div>

                  <div style={{height: "1px"}}></div>

                </Paper>
            
            </div>

          </div>
          <Footer />

        
      </div>
    );
  }


export default App;

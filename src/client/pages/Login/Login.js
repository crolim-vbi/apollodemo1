import React from 'react';
import Navbar from '../../partials/Navbar/Navbar';
import Footer from '../../partials/Footer/Footer';

import Layout from '../../layout/Layout';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import GoogleIcon from "../../shared/customIcons/GoogleIcon/GoogleIcon"

import Paper from '@material-ui/core/Paper';


import astronautWelcome from "./astronaut_welcome.png"

import AccountCircle from '@material-ui/icons/AccountCircle';



const App = function() {

  
    return (
      <div className="globalWrap">

          
          <Navbar />
        
          <div style={{display: "inline-block", textAlign: "center", margin: "auto", padding: "30px", maxWidth: "380px"}}>

              <div style={{borderBottom: "solid 1px lightgray2", marginBottom: "35px"}}>
                <a style={{fontWeight: "600", fontSize: "1.25rem"}}>Bem-Vindo ao Sistema Apollo Lunar</a>
              </div>

          
              <Paper elevation={2} style={{padding: "25px 25px 0px"}}>

                {/* <img src={astronautWelcome} style={{width: "90px",  marginBottom: "25px"}}></img> */}

                <AccountCircle style={{fontSize:"50px", color: "dimgray",  marginBottom: "20px"}}/>

                <div style={{color:"dimgray", marginBottom: "25px", fontSize: "0.875rem"}}>
                    <a> Será necessária uma conta @vbirealestate.com, </a> 
                    <a> caso possua, favor identifique-se no botão abaixo. </a>
                </div>
                

                <div style={{marginBottom: "25px",  borderBottom: "solid 1px lightgray"}}> </div>

                <Button href="/#/home" variant="contained" style={{marginBottom: "25px"}}>Login com o Google</Button>
              
              </Paper>
          
          </div>


          <Footer />

        
      </div>
    );
  }


export default App;

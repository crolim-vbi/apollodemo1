import React from 'react';
import Layout from '.././layout/Layout';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import GoogleIcon from "../shared/customIcons/GoogleIcon/GoogleIcon"


const App = function() {

  
    return (
      <Layout titulo="Bem-Vindo ao Sistema Apollo Lunar">
          <div style={{display: "inline-block"}}>
            <div style={{color:"dimgray", marginBottom: "25px", fontSize: "1rem"}}>
                <a> Será necessária uma conta @vbirealestate.com, </a> <br></br>
                <a> caso possua, favor identifique-se no botão abaixo </a>
            </div>
            <div style={{marginBottom: "25px", borderBottom: "solid 1px lightgray", width: "100%"}}> </div>
            <Button href="/#/home" variant="contained">Login com o Google</Button>
          </div>
      </Layout>
    );
  }


export default App;

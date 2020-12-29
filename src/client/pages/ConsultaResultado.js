
import React from 'react';
import Layout from '.././layout/Layout';

import DataTable1 from '../components/DataTable/DataTable1';

import Tooltip from '@material-ui/core/Tooltip';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


import IconButton from '@material-ui/core/IconButton';

import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';



const icon3 = <ScreenShareIcon    />;
const icon6 = <ArrowBackIcon  />;


const shoot = () => {
  alert("Esta funcionalidade ainda está em desenvolvimento");
}



const App = function() {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      alignItems: "center",
      backgroundColor: "inherit",
      border: "solid 1px transparent"
    },
    paper: {
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2)
    },
  }));


  const classes = useStyles();

  
    return (<Layout titulo="Sua Pesquisa retornou 25 Documentos" >

            

            <Grid container spacing={0} style={{color:"dimgray"}}>
              <Grid item xs={12} sm={6}>
                <div style={{marginBottom: "10px"}}>Entidades: BREOF FIP, SBC FII, VBI CRI FII</div>
                <div style={{marginBottom: "10px"}}>Datas: de 2020.09 à 2020.12</div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div style={{marginBottom: "10px"}}>Tema: Ativo</div>
                <div style={{marginBottom: "10px"}}>Relatório: Todos</div>
              </Grid>        
              <Grid item xs={12} md={12}>
                <div style={{marginBottom: "10px"}}></div>
              </Grid>           
              <Grid item xs={12} md={12} style={{borderTop: "solid 1px lightgray", borderBottom: "solid 1px lightgray2"}}>
                <div style={{width:"100%", height:"100%", display: "flex", justifyContent: "flex-start"}}>
                    <div style={{display: "inline-block", alignSelf: "flex-start", padding: "3px 0px"}}>
                      <Tooltip title="Retornar"><IconButton href="javascript:history.back()">{icon6}</IconButton></Tooltip>
                      <Tooltip title="Compartilhar esta Pesquisa"><IconButton  href="javascript:void(0);" onClick={shoot} >{icon3}</IconButton></Tooltip>
                    </div>
                </div>
  
              </Grid>                  
               
            </Grid> 

        
            <div className={classes.root}  style={{paddingBottom: "10px"}}>

                <Grid container spacing={3}>
                  <Grid item xs={12}>
                      

                      
                      <DataTable1/>
    
                  </Grid> 


                </Grid> 



            <br></br>                

            </div>

    
      </ Layout>);
  }


export default App;

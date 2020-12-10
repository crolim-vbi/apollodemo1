
import React from 'react';
import Layout from '.././layout/Layout';

import DataTable3 from '../Components/DataTable3';

import Tooltip from '@material-ui/core/Tooltip';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';

import ShareIcon from '@material-ui/icons/Share';
const icon3 = <ShareIcon color="action"  fontSize="small" />;



const shoot = () => {
  alert("Esta funcionalidade ainda está em desenvolvimento");
}



const App = function() {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      alignItems: "center",
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


  const classes = useStyles();

  
    return (<Layout titulo="Sua Busca retornou 25 Resultados" >

            

            <Grid container spacing={2} style={{color:"gray"}}>
              <Grid item xs={12} sm={6}>
                <a>Entidades: BREOF FIP, SBC FII, VBI CRI FII</a>
                <div style={{height: "10px"}}>&nbsp;</div>
                <a>Datas: de 2020.09 à 2020.12</a><br />
              </Grid>
              <Grid item xs={12} sm={3}>
                <a>Tema: Ativo</a>
                <div style={{height: "10px"}}>&nbsp;</div>
                <a>Relatório: Todos</a><br />
              </Grid>        
              <Grid item xs={12} md={3}>
                <div style={{width:"100%", height:"100%", display: "flex", justifyContent: "flex-end"}}>
                    <div style={{display: "inline-block", alignSelf: "flex-end"}}>
                      <Tooltip title="Compartilhar esta Busca"><Button href="javascript:void(0);" onClick={shoot} style={{marginLeft:"20px"}}>{icon3}</Button></Tooltip>
                    </div>
                </div>
  
              </Grid>                      
            </Grid> 

            <div style={{height: "30px"}}>&nbsp;</div>
        
            <div className={classes.root}  style={{paddingBottom: "10px"}}>

                <Grid container spacing={3}>
                  <Grid item xs={12}>
                      

                      
                      <DataTable3/>
    
                  </Grid> 


                </Grid> 



            <br></br>                

            </div>

    
      </ Layout>);
  }


export default App;

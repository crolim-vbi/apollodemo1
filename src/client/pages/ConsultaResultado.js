
import React from 'react';
import Layout from '.././layout/Layout';

import DataTable3 from '../Components/DataTable3';


import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';



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


  const shoot = () => {
    alert("Este módulo ainda está em desenvolvimento");
  }
  
  
    return (<Layout titulo="Sua Busca retornou 25 Resultados" >

            

            <Grid container spacing={2} style={{color:"gray"}}>
              <Grid item xs={12} sm={6}>
                <a>Entidades: BREOF FIP, SBC FII, VBI CRI FII</a>
                <div style={{height: "10px"}}>&nbsp;</div>
                <a>Datas: de 2020.09 à 2020.12</a><br />
              </Grid>
              <Grid item xs={12} sm={6}>
                <a>Tema: Ativo</a>
                <div style={{height: "10px"}}>&nbsp;</div>
                <a>Relatório: Todos</a><br />
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

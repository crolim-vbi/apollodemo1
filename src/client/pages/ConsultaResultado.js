
import React from 'react';
import Layout from '.././layout/Layout';

import DataTable2 from '../Components/DataTable2';



import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';






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

  const shoot = () => {
    alert("Este módulo ainda está em desenvolvimento");
  }
  
  
    return (<Layout titulo="Resultado" subTitulos={["Consultar","Resultado"]}>

            

            <Grid container spacing={0} style={{color:"gray"}}>
              <Grid item xs={4}>
                <a>Entidades: BREOF FIP, BREOF III FIP, SBC FII</a>
                <div style={{height: "15px"}}>&nbsp;</div>
                <a>Datas: de 2020.09 à 2020.12</a><br />
              </Grid>
              <Grid item xs={4}>
                <a>Tema: Ativo</a>
                <div style={{height: "15px"}}>&nbsp;</div>
                <a>Relatório: Todos</a><br />
              </Grid>        
              <Grid item xs={4}>
                  <div style={{display: "flex",   justifyContent: "center", alignItems: "center", height: "100%", float: "right"}}>
                      <Button variant="contained" onClick={shoot}>BAIXAR SELECIONADOS</Button>  
                  </div>       
              </Grid>   
            </Grid> 

            <div style={{height: "30px"}}>&nbsp;</div>
        
            <div className={classes.root}  style={{paddingBottom: "10px"}}>

                <Grid container spacing={3}>
                  <Grid item xs={12}>
                      

                      
                      <DataTable2/>
    
                  </Grid> 


                </Grid> 



            <br></br>                

            </div>

    
      </ Layout>);
  }


export default App;


import React from 'react';
import Layout from '../layout/Layout';

import DataTable3 from '../Components/DataTable3';


import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import PdfExemplo from '../Components/PdfExemplo'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import GetAppIcon from '@material-ui/icons/GetApp';
import ShareIcon from '@material-ui/icons/Share';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

const icon2 = <GetAppIcon color="action" fontSize="small"/>;
const icon3 = <ShareIcon color="action" fontSize="small"/>;
const icon5 = <PictureAsPdfIcon color="action" fontSize="small"/>;



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
      color: "black",
      paddingTop: 10,
      paddingBottom: 10
    },
    pos: {
      marginBottom: 12,
    },
  });

  const classes = useStyles();

  const classes2 = useStyles2();

  const shoot = () => {
    alert("Esta funcionalidade ainda está em desenvolvimento");
  }
  
  
    return (<>
    
    
      <Layout titulo="Carteira Diária - VBI CRI FII - 30/nov/2020" >

    

            <Grid container spacing={2} style={{color:"gray"}}>
              <Grid item xs={12} sm={6}>
                <div style={{marginBottom: "10px"}}>Razão Social: FUNDO DE INVESTIMENTO IMOBILIÁRIO – VBI CRI</div>
                <div style={{marginBottom: "10px"}}>CNPJ: 28.729.197/0001-13</div>
                <div style={{marginBottom: "10px"}}>Administrador: BRL TRUST DTVM - 13.486.793/0001-42</div>
                
              </Grid>
              <Grid item xs={12} sm={6}>
                <div style={{marginBottom: "10px"}}>Carregado Por: Diogo Massaro</div>
                <div style={{marginBottom: "10px"}}>Carregado Em: 01/Dez/2020</div>
                <div style={{marginBottom: "10px"}}>Versão: 03   </div>
              </Grid>        
            </Grid> 

            {/* <div style={{height: "15px"}}>&nbsp;</div> */}



            <div style={{height: "15px"}}>&nbsp;</div>
        
            <div className={classes.root}  style={{paddingBottom: "10px"}}>

                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    
                    <Card className={classes2.root} style={{backgroundColor: ""}}>

                      <CardContent style={{color: "gray"}}>
                      <div style={{textAlign:"right"}}>
                        <a href="ExcelExemplo.xlsx" target="_blank" style={{marginLeft:"30px"}}>{icon2}</a> 
                        <a href="PdfExemplo.pdf" target="_blank" style={{marginLeft:"30px"}}>{icon5}</a> 
                        <a href="javascript:void(0);" onClick={shoot} style={{marginLeft:"30px"}}>{icon3}</a> 
                      </div>
                        <PdfExemplo />
                        {/* <embed  src="PdfExemplo.pdf" width="100%" height="500px"/> */}
                      </CardContent>
                    </Card>

                  </Grid> 

                </Grid> 



            <br></br>                

            </div>

    
            

      </ Layout>

    
    </ >);




 }


export default App;

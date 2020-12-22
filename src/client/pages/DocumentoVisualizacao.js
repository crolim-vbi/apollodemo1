
import React from 'react';
import Layout from '../layout/Layout';

import Tooltip from '@material-ui/core/Tooltip';


import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import PdfExemplo from '../Components/PdfExemplo'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { Link } from 'react-router-dom';


import GetAppIcon from '@material-ui/icons/GetApp';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

import IconButton from '@material-ui/core/IconButton';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';


const icon2 = <GetAppIcon   />;
const icon3 = <ScreenShareIcon />;
const icon5 = <PictureAsPdfIcon />;
const icon6 = <ArrowBackIcon  />;
const icon7 = <LibraryBooksIcon  />;



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
  

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };  

  
    return (<>
    
    
      <Layout titulo="Carteira Diária - VBI CRI FII - 30/nov/2020" >

    

            <Grid  container spacing={0} style={{color:"dimgray"}}>
              <Grid item xs={12} md={6}>
                <div style={{marginBottom: "10px"}}>Razão Social: FUNDO DE INVESTIMENTO IMOBILIÁRIO – VBI CRI</div>
                <div style={{marginBottom: "10px"}}>CNPJ: 28.729.197/0001-13</div>
                <div style={{marginBottom: "10px"}}>Administrador: BRL TRUST DTVM - 13.486.793/0001-42</div>
                
              </Grid>
              <Grid item xs={12} md={6}>
                <div style={{display: "inline-block"}}>
                  <div style={{marginBottom: "10px"}}>Carregado Por: Diogo Massaro</div>
                  <div style={{marginBottom: "10px"}}>Carregado Em: 01/Dez/2020</div>
                  <div style={{marginBottom: "10px"}}>Versão: 03   </div>
                </div>
              </Grid>
              <Grid item xs={12} md={12}>
                <div style={{marginBottom: "10px"}}></div>
              </Grid>
              <Grid item xs={12} md={12} style={{borderTop: "solid 1px lightgray", borderBottom: "solid 1px lightgray"}}>
                <div style={{width:"100%", height:"100%", display: "flex", justifyContent: "flex-start"}}>
                    <div style={{display: "inline-block", alignSelf: "flex-start"}}>

                      <Tooltip title="Retornar"><IconButton href="javascript:history.back()">{icon6}</IconButton></Tooltip>

                      
                        
                      <Tooltip title="Baixar Documento">
                        <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                          {icon2}
                        </IconButton>
                      </Tooltip>
                      <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={handleClose}><a href="ExcelExemplo.xlsx" target="_blank" style={{textDecoration: "inherit", color: "inherit"}}>Baixar em Excel</a></MenuItem>
                        <MenuItem onClick={handleClose}><a href="PdfExemplo.pdf" download="PdfExemplo.pdf" target="_blank" style={{textDecoration: "inherit", color: "inherit"}}>Baixar em PDF</a></MenuItem>
                      </Menu>

                      
                      
                      <Tooltip title="Visualizar em PDF"><IconButton href="PdfExemplo.pdf" target="_blank">{icon5}</IconButton></Tooltip>

                      

                      <Tooltip title="Versões Antigas">
                        <IconButton aria-controls="simple-menu-2" aria-haspopup="true" onClick={handleClick2}>
                          {icon7}
                        </IconButton>
                      </Tooltip>
                      <Menu
                        id="simple-menu-2"
                        anchorEl={anchorEl2}
                        keepMounted
                        open={Boolean(anchorEl2)}
                        onClose={handleClose2}
                      >
                        <MenuItem onClick={handleClose2}  onClick={shoot}><a>Acessar Versão Antiga 2</a></MenuItem>
                        <MenuItem onClick={handleClose2}  onClick={shoot}><a>Acessar Versão Antiga 1</a></MenuItem>                        

                      </Menu>

                      
                      
                      <Tooltip title="Compartilhar este Documento"><IconButton href="javascript:void(0);" onClick={shoot}>{icon3}</IconButton></Tooltip>
                    </div>
                </div>
  
              </Grid>                    
              <Grid item xs={12} md={12}>
                <div style={{marginBottom: "10px"}}></div>
              </Grid>              
            </Grid> 

            
        
            <div className={classes.root}  style={{paddingBottom: "10px"}}>

                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    
                    <Card className={classes2.root} style={{backgroundColor: ""}} elevation={3}>

                      <CardContent style={{color: "dimgray"}}>

                        <PdfExemplo />
                        
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

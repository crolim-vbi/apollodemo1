
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

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

const icon2 = <GetAppIcon color="action"  />;
const icon3 = <ScreenShareIcon color="action"/>;
const icon5 = <PictureAsPdfIcon color="action"/>;
const icon6 = <ArrowBackIcon color="action" />;
const icon7 = <LibraryBooksIcon color="action" />;



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

    

            <Grid container spacing={1} style={{color:"gray"}}>
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
                <div style={{width:"100%", height:"100%", display: "flex", justifyContent: "flex-end"}}>
                    <div style={{display: "inline-block", alignSelf: "flex-end"}}>

                      <Tooltip title="Retornar"><Link to="/ConsultaResultado" ><Button>{icon6}</Button></Link></Tooltip>

                      <Tooltip title="Baixar Documento">
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                          {icon2}
                        </Button>
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
                      
                      <Tooltip title="Visualizar em PDF"><Button href="PdfExemplo.pdf" target="_blank">{icon5}</Button></Tooltip>


                      <Tooltip title="Versões Antigas">
                        <Button aria-controls="simple-menu-2" aria-haspopup="true" onClick={handleClick2}>
                          {icon7}
                        </Button>
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


                      
                      <Tooltip title="Compartilhar"><Button href="javascript:void(0);" onClick={shoot}>{icon3}</Button></Tooltip>
                    </div>
                </div>
  
              </Grid>                    
            </Grid> 

            <div style={{height: "10px"}}>&nbsp;</div>
        
            <div className={classes.root}  style={{paddingBottom: "10px"}}>

                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    
                    <Card className={classes2.root} style={{backgroundColor: ""}}>

                      <CardContent style={{color: "gray"}}>

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

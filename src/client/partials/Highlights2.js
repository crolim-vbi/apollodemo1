
import React from 'react';
import DataTable2 from  '../components/DataTable/DataTable2';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';



import SearchIcon from '@material-ui/icons/Search';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPage';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircle';
import PublishOutlinedIcon from '@material-ui/icons/Publish';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';



const App = function() {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      alignItems: "center",
    },
    paper: {
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    },
  }));

  

  const classes = useStyles();

  

    return (<>
    
        
            <div className={classes.root}  style={{paddingBottom: "10px"}}>

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                      
                      <Link exact to="/consultar" style={{textDecoration: "none"}} >
                          <Button variant="contained"  color="primary" style={{width: "100%",  padding: "6px 16px"}}><SearchIcon /> &nbsp; Pesquisar Documentos</Button>
                      </Link>

                      

                        
                    </Grid> 



                    <Grid item xs={12} sm={6} md={3}>
                      
                      <Link exact to="/preferencias" style={{textDecoration: "none"}} >
                        <Button variant="contained"  color="primary" style={{width: "100%",  padding: "6px 16px"}}><NotificationsNoneIcon /> &nbsp; Configurar Notificações</Button>
                      </Link>
                        
                    </Grid>        

                   

                    <Grid item xs={12} sm={6} md={3}>
                      
                      <Link exact to="/minhaConta" style={{textDecoration: "none"}} >
                        <Button variant="contained"  color="primary" style={{width: "100%",  padding: "6px 16px"}}><AccountCircleOutlinedIcon /> &nbsp; Minha Conta</Button>
                      </Link>

                    </Grid>                     


                   <Grid item xs={12} sm={6} md={3}>
                      
                      <Link exact to="/inserir" style={{textDecoration: "none"}} >
                          <Button variant="contained"  color="primary" style={{width: "100%",  padding: "6px 16px"}}><CloudUploadIcon /> &nbsp; Inserir Documentos</Button>
                      </Link>

                    </Grid> 


                </Grid> 



            <br></br>                

            </div>

    
    </>);
  }


export default App;

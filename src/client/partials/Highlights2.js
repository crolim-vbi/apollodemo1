
import React from 'react';
import DataTable2 from  '../components/DataTable/DataTable2';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';


import SearchIcon from '@material-ui/icons/Search';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';



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
                      

                          <Button variant="contained" style={{width: "100%", backgroundColor: "white", padding: "15px"}}><FindInPageOutlinedIcon /> &nbsp; Pesquisar Documentos</Button>

                      

                        
                    </Grid> 



                    <Grid item xs={12} sm={6} md={3}>
                      
                      
                      <Button variant="contained" style={{width: "100%", backgroundColor: "white", padding: "15px"}}><NotificationsNoneIcon /> &nbsp; Escolher Notificações</Button>

                        
                    </Grid>        

                   

                    <Grid item xs={12} sm={6} md={3}>
                      
                       <Button variant="contained" style={{width: "100%", backgroundColor: "white", padding: "15px"}}><AccountCircleOutlinedIcon /> &nbsp; Minha Conta</Button>
                      

                    </Grid>                     


                   <Grid item xs={12} sm={6} md={3}>
                      
                      <Button variant="contained" style={{width: "100%", backgroundColor: "white", padding: "15px"}}><PublishOutlinedIcon /> &nbsp; Inserir Documentos</Button>


                    </Grid> 


                </Grid> 



            <br></br>                

            </div>

    
    </>);
  }


export default App;

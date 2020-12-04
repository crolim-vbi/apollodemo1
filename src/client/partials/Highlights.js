
import React from 'react';
import DataTable from '../Components/DataTable';



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
  

    return (<>
    
        
            <div className={classes.root}  style={{paddingBottom: "10px"}}>

                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                      <Card className={classes2.root}>
                      <CardContent style={{borderBottom: "solid 1px lightgray", paddingTop: "10px", paddingBottom: "5px"}}>
                          <Typography className={classes2.title} color="textSecondary" gutterBottom>
                              Documentos Favoritos
                          </Typography>
                      </CardContent>
                      <CardContent>
                          <DataTable/>
                      </CardContent>
                      <CardContent style={{borderTop: "solid 1px lightgray"}}>
                                  <Typography style={{}}>
                                  
                                      <div style={{display: "inline",  float: "right",  paddingBottom: "20px"}}>
                                          <Button  onClick={shoot} variant="contained">BAIXAR SELECIONADOS</Button>
                                      </div>
                                  </Typography>
                              </CardContent>

                      </Card>        
                  </Grid> 

                  <Grid item xs={12} md={6}>

                      <Card className={classes2.root}>
                      <CardContent style={{borderBottom: "solid 1px lightgray", paddingTop: "10px", paddingBottom: "5px"}}>
                          <Typography className={classes2.title} color="textSecondary" gutterBottom>
                              Últimas Atualizações
                          </Typography>
                      </CardContent>
                      <CardContent>
                          <DataTable/>
                      </CardContent>
                      <CardContent style={{borderTop: "solid 1px lightgray"}}>
                                  <Typography style={{}}>
                                  
                                      <div style={{display: "inline",  float: "right",  paddingBottom: "20px"}}>
                                          <Button onClick={shoot} variant="contained">BAIXAR SELECIONADOS</Button>
                                      </div>
                                  </Typography>
                              </CardContent>                      
                      </Card>        


                  </Grid> 
                </Grid> 



            <br></br>                

            </div>

    
    </>);
  }


export default App;

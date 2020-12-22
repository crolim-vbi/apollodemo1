
import React from 'react';
import DataTable2 from  '../Components/DataTable/DataTable2';



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
      color: "black"
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
    
        
            <div className={classes.root}  style={{paddingBottom: "10px"}}>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      

                          <DataTable2 titulo="Preferidos"/>

                      

                        
                    </Grid> 

                    <Grid item xs={12} md={6}>
                      
                      
                          <DataTable2 titulo="Últimas atualizações"/>

                      

                        
                    </Grid>                     

                </Grid> 



            <br></br>                

            </div>

    
    </>);
  }


export default App;

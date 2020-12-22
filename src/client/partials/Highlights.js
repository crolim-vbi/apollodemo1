
import React from 'react';
import DataTable2 from  '../components/DataTable/DataTable2';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';



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

  

  const classes = useStyles();

  

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


import React from 'react';
import DataTable2 from  '../components/DataTable/DataTable2';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';



const App = function() {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      alignItems: "center",
    }
  }));

  

  const classes = useStyles();

  

    return (<>
    
        
            <div className={classes.root}  style={{paddingBottom: "10px", marginBottom: "25px"}}>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                      

                          <DataTable2 titulo="Em Destaque"/>

                      

                        
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

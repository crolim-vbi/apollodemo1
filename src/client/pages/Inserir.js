import React from 'react';
import Layout from '.././layout/Layout';
import Stepper from '../partials/Stepper';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    color: "black",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 8
  },
  pos: {
    marginBottom: 12,
  },
});


const App = function() {


  const classes = useStyles();

 

  
    return (<>
      <Layout titulo="" >

        <div style={{marginBottom: "0px"}}>  </div>

        <Card className={classes.root} elevation={3}>
          <CardContent style={{borderBottom: "solid 1px lightgray", paddingTop: "5px", paddingBottom: "0px"}}>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                  <h6 class="MuiTypography-root MUIDataTableToolbar-titleText-43 MuiTypography-h6">Inserir Documentos</h6>
              </Typography>
          </CardContent>                   

          <CardContent>
            <Typography variant="body2" component="p">
                <Stepper />
            </Typography>
          </CardContent>
        </Card>

        <div style={{height: "25px"}}>  </div>

      </Layout>
    
    </>);
  }


export default App;



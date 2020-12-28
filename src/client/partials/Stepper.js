import React from 'react';
import { makeStyles, getMuiTheme  } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';

import Classificacao from './Classificacao';

import Dropzone from '../components/Dropzone';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  paper: {
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },  
}));

function getSteps() {
  return ['Carregar Arquivos', 'Classificar Arquivos'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Dropzone  />;
    case 1:
      return (<Classificacao />);
    default:
      return 'Unknown step';
  }
}

export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step) => {
    
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };



  
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} style={{marginBottom: "50px", marginTop: "", backgroundColor: "inherit",  border: "solid 1px lightgray", borderRadius: "4px"}}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption">Optional</Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps} >
              <StepLabel  {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div >
        {activeStep === steps.length ? (
          <div>
            <Typography component="div" style={{margin: "0px", padding: "0px 0px"}} className={classes.instructions}>
                <Paper elevation={3} className={classes.paper}><a style={{color:"dimgray", fontWeight: "600"}}>Arquivos carregados e classificados com sucesso!</a></Paper>
            </Typography>

            <Button onClick={handleReset} className={classes.button} style={{marginTop: "50px"}}>
              Reiniciar
            </Button>
          </div>
        ) : (
          <div>
            <Typography component="div" style={{margin: "0px", padding: "0px 0px"}} className={classes.instructions}>{getStepContent(activeStep)}</Typography>

            <div style={{marginTop: "50px"}}>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Retornar
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  onClick={handleSkip}
                  className={classes.button}
                >
                  Skip
                </Button>
              )}

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Avançar' : 'Avançar'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

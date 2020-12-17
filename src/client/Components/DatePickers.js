import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',    
  },
  textField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
  },
}));

const useStyles2 = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),     
    background: "inherit"
  },
  input: {
    color: "dimgray"
  }
}));


export default function DatePickers() {
  const classes = useStyles();
  const classes2 = useStyles2();

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        // label="Birthday"
        type="date"
        defaultValue=""
        className={classes.textField}        
        InputLabelProps={{
          shrink: true
        }}
        InputProps={{
          className: classes2.input
        }}        
      />
    </form>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import list from './List';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    color: '#fff',
  },
  input: {
    display: 'none',
  },
  
}));

export default function ContainedButtons(list) {
  const classes = useStyles();

  return (
    <div>
      <Button className={classes.button}>
        
      </Button>
      <TextField
        id="outlined-name"
        label="Name"
       
        margin="normal"
        variant="outlined"
      />
      </div>
  );
}
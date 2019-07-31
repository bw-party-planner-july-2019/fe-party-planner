import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import list from './List';
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    color: 'green'
  },
  input: {
    display: 'none',
  },
}));

export default function ContainedButtons(list) {
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" className={classes.button}>
        Price
      </Button>
      <Button variant="contained" className={classes.button}>
          Item
      </Button>
      </div>
  );
}
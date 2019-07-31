import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import list from './List';
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
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
        Price
      </Button>
      </div>
  );
}
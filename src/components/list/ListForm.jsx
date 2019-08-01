import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
        Price
      </Button>
      <Button className={classes.button}>
          Item
      </Button>
      </div>
  );
}
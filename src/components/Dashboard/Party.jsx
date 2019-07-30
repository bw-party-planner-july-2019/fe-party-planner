import React from 'react';
import data from './Dashboard';
import { makeStyles } from '@material-ui/core/styles';
import { shadows } from '@material-ui/system';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

const useStyles = makeStyles({
  card: {
    marginLeft: 20,
    marginRight: 20,

    color: '#fff',
    background: '#B33771',
    border: 2,
    marginLeft: 20,
    marginRight: 20,
  },

  title: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',

  },

  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
    console.log(props)
  const classes = useStyles();

  return (
      <Grid item xs={4}>

        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {`Party Name: ${props.item.party_name}`}
            </Typography>
            <Typography className={classes.pos}>
              {`Number of Guests: ${props.item.n_of_guests}`}
            </Typography>
            <Typography className={classes.pos}>
              {`Date: ${moment(props.item.date).format('MMMM Do YYYY, h:mm:ss a')}`}
            </Typography>
            <Typography className={classes.pos}>
              {`Theme: ${props.item.theme}`}
            </Typography>
            <Typography className={classes.pos}>
              {`Budget: ${props.item.budget}`}
            </Typography>
          </CardContent>
                 <CardActions>
        <Button color="secondary" size="large">View</Button>
        <Button color="secondary" size="large">Edit</Button>
        <Button color="secondary" size="large">Delete</Button>
      </CardActions>
        </Card>
     </Grid> 
  );
}

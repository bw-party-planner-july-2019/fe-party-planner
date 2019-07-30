import React from 'react';
import data from './Dashboard';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  
  title: {
    fontSize: 14,
  },

  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
    console.log(props)
  const classes = useStyles();
 

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {`Party Name: ${props.item.party_name}`} 
        </Typography>
        <Typography className={classes.pos}>
        {`Number of Guests: ${props.item.n_of_guests}`}
        </Typography>
        <Typography className={classes.pos}>
            {`Date: ${props.item.date}`}
            </Typography>
            <Typography className={classes.pos}>
                {`Theme: ${props.item.theme}`}
            </Typography>
            <Typography className={classes.pos}>
                {`Budget: ${props.item.budget}`}
                </Typography>
       
      </CardContent>
      
    </Card>
  );
}



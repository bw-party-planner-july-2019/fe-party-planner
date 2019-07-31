import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import {useSelector} from 'react-redux';

const useStyles = makeStyles({
  card: {
    color: '#fff',
    background: '#B33771',
    border: 2,

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

function Party(props) {
  console.log(props);
  const classes = useStyles();
  const [isSingle, setIsSingle] = useState(false);
  const user_Id = useSelector(state => state.auth.user.userID);

  useEffect(() => props.match.params.id && setIsSingle(true), []);

  return (
      <Grid item xs={12} sm={6} md={4} xl={3}>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary"
                        gutterBottom>
              {`Party Name: ${props.item.party_name}`}
            </Typography>
            <Typography className={classes.pos}>
              {`Number of Guests: ${props.item.n_of_guests}`}
            </Typography>
            <Typography className={classes.pos}>
              {`Date: ${moment(props.item.date)
                  .format('MMMM Do YYYY, h:mm:ss a')}`}
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
            {user_Id === props.item.user_id && <Button color="secondary" size="large">Edit</Button>}
            {user_Id === props.item.user_id && <Button color="secondary" size="large">Delete</Button>}
          </CardActions>
        </Card>
      </Grid>
  );
}

export default withRouter(Party);
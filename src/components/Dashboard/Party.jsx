import React, {useEffect, useState, useContext} from 'react';
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
import {ActionsContext} from '../../contexts/ActionsContext';

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
  const {partyActions: {fetchParty}} = useContext(ActionsContext);
  const [values, setValues] = useState({});
  const user_Id = useSelector(state => state.auth.user.userID);
  const party = useSelector(state=>state.party.party);
  useEffect(() => props.match.params.id && setIsSingle(true), []);
  useEffect(()=> {
    if (isSingle) {
      fetchParty(props.match.params.id);
    }
  }, [isSingle]);
  useEffect(()=> {
    if (isSingle) {
      setValues(party)
    } else {
      setValues(props.item)
    }
  },[party])
  return (
      <Grid item xs={12} sm={6} md={4} xl={3}>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary"
                        gutterBottom>
              {`Party Name: ${values.party_name}`}
            </Typography>
            <Typography className={classes.pos}>
              {`Number of Guests: ${values.n_of_guests}`}
            </Typography>
            <Typography className={classes.pos}>
              {`Date: ${moment(values.date)
                  .format('MMMM Do YYYY, h:mm:ss a')}`}
            </Typography>
            <Typography className={classes.pos}>
              {`Theme: ${values.theme}`}
            </Typography>
            <Typography className={classes.pos}>
              {`Budget: ${values.budget}`}
            </Typography>
          </CardContent>
          <CardActions>
            <Button color="secondary" size="large">View</Button>
            {user_Id === values.user_id && <Button color="secondary" size="large">Edit</Button>}
            {user_Id === values.user_id && <Button color="secondary" size="large">Delete</Button>}
          </CardActions>
        </Card>
      </Grid>
  );
}

export default withRouter(Party);
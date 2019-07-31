import React, {useContext, useEffect, useState} from 'react';
import {Link as RouterLink, withRouter} from 'react-router-dom';
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
  const user_Id = useSelector(state => state.auth.user.userID);
  const party = useSelector(state => state.party.party);
  const isLoading = useSelector(state => state.party.isLoading);
  const initialState = {
    id: 0,
    party_name: '',
    n_of_guests: 0,
    date: '',
    theme: '',
    budget: 0,
    user_id: user_Id,
  };
  const classes = useStyles();
  const [isSingle, setIsSingle] = useState(false);
  const {partyActions: {fetchParty}} = useContext(ActionsContext);
  const [values, setValues] = useState(initialState);

  useEffect(() => props.match.params.id && setIsSingle(true), []);
  useEffect(() => {
    props.match.params && props.match.params.id &&
    fetchParty(props.match.params.id);
  }, []);

  useEffect(()=> {
    if (party && party.id) {
      setValues(party);
    } else if(props.item && props.item.id) {
      setValues(props.item)
    }
  }, [party]);

  console.log(values);
  if (isLoading) {
    return <h3>Loading, Replace me with something nice</h3>;
  } else {
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
              <Button color="secondary" size="large" component={RouterLink}
                      to={`/dashboard/view-party/${values.id}`}>View</Button>
              {user_Id === values.user_id &&
              <Button color="secondary" size="large" component={RouterLink}
                      to={`/dashboard/edit-party/${values.id}`}>Edit</Button>}
              {user_Id === values.user_id &&
              <Button color="secondary" size="large">Delete</Button>}
            </CardActions>
          </Card>
        </Grid>
    );
  }
}

export default withRouter(Party);
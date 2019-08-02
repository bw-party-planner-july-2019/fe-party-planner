import React, { useContext, useEffect } from 'react';
import Party from './Party';
import { useSelector } from 'react-redux';
import { ActionsContext } from '../../contexts/ActionsContext';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: theme.spacing(8),
    textAlign: 'center',
  },
}));

const CardContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Dashboard = () => {
  const parties = useSelector(state => state.party.parties);
  const { partyActions: { fetchParties } } = useContext(ActionsContext);
  const classes = useStyles();
  useEffect(() => fetchParties(), []);
  return (
    <DashboardContainer>
      <Typography className={classes.title} variant='h1' color='secondary'>Time for a party</Typography>
      <CardContainer>
        <Grid container spacing={2}>
          {parties.map((item, i) => <Party item={item} key={i}/>)}
        </Grid>
      </CardContainer>
    </DashboardContainer>
  );
};
export default Dashboard;

import React, {useEffect, useContext} from 'react';
import Party from './Party';
import {useSelector} from 'react-redux';
import {ActionsContext} from '../../contexts/ActionsContext';
import Grid from '@material-ui/core/Grid';

 const Dashboard = () => {
   const parties = useSelector(state=>state.party.parties);
   const {partyActions: {fetchParties}} = useContext(ActionsContext);

   useEffect(()=> fetchParties(),[]);

   console.log(parties);
   return(
     <div>
          
       
         <h1>Dashboard</h1>
         <Grid container spacing={4}>
         {parties.map((item, i)=> <Party item={item} key={i} />)}
         
         </Grid>
     </div>
    ) 
}
  export default Dashboard

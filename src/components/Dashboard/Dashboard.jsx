import React, {useEffect, useContext} from 'react';
import Party from './Party';
import {useSelector} from 'react-redux';
import {ActionsContext} from '../../contexts/ActionsContext';


 const Dashboard = () => {
   const parties = useSelector(state=>state.party.parties);
   const {partyActions: {fetchParties}} = useContext(ActionsContext);

   useEffect(()=> fetchParties(),[]);

   console.log(parties);
   return(
     <div>
         <h1>Dashboard</h1>
         {parties.map((item, i)=> <Party item={item} key={i} />)}
     </div>
    ) 
}
  export default Dashboard

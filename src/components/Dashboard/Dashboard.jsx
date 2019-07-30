import React from 'react';
import Party from './Party';

const data = [
    {
      "id": 1,
      "party_name": "Ken B-day",
      "n_of_guests": 50,
      "date": "2019-10-07",
      "theme": "80s",
      "budget": 500,
      "user_id": 1
    },
    {
      "id": 2,
      "party_name": "Office party",
      "n_of_guests": 150,
      "date": "2019-12-20",
      "theme": "X-mas",
      "budget": 2300,
      "user_id": 2
    },
    {
      "id": 3,
      "party_name": "Halloween Party",
      "n_of_guests": 90,
      "date": "2019-10-31",
      "theme": "Zombies",
      "budget": 90,
      "user_id": 3
    }
  ]
 const Dashboard = () => {
    return(
     <div>
         <h1>Dashboard</h1>
         {data.map((item, i)=> <Party item={item} key={i} />)}
     </div>
    ) 
}
  export default Dashboard

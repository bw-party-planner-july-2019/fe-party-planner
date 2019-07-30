import React from 'react';
import {useAuthActions} from '../store/auth/useAuthActions';
import {ActionsProvider} from '../contexts/ActionsContext';
import {Switch, Route} from 'react-router-dom';
import DisplayList from "./list/List";

const data = [{ id: 1, party_id: 1, item: 'balloons', purchased: false, price: 5 },
    { id: 2, party_id: 1, item: 'drinks', purchased: false, price: 55 },
    { id: 3, party_id: 1, item: 'cake', purchased: false, price: 20 },
    { id: 4, party_id: 2, item: 'juice', purchased: false, price: 5 },
    { id: 5, party_id: 2, item: 'cups', purchased: false, price: 10 },
    { id: 6, party_id: 2, item: 'cookies', purchased: false, price: 15 },
    { id: 7, party_id: 3, item: 'decorations', purchased: false, price: 25 },
    { id: 8, party_id: 3, item: 'candy', purchased: false, price: 20 },
    { id: 9, party_id: 3, item: 'music', purchased: false, price: 10 }];

const App = () => {
  const authActions = useAuthActions();

  return (
      <ActionsProvider value={{authActions}}>
        <Switch>
          <Route path='/' render={() => <DisplayList party_id={1} list={data}/>}/>
        </Switch>
      </ActionsProvider>
  );
};

export default App;
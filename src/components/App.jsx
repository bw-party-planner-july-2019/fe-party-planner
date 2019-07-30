import React from 'react';
import Login from './Login';
import {useAuthActions} from '../store/auth/useAuthActions';
import {ActionsProvider} from '../contexts/ActionsContext';
import {Switch, Route} from 'react-router-dom';
import Form from './Form';

const App = () => {
  const authActions = useAuthActions();
  const partyActions = usePartyActions();

  return (
     <ActionsProvider value={{ authActions, partyActions }}>
        <Switch>
          <Route path='/' render={props => <Login {...props} />}/>
        </Switch>
      </ActionsProvider>
  );
};

export default App;


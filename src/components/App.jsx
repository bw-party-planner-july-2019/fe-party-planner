import React from 'react';
import Login from './Login';
import {useAuthActions} from '../store/auth/useAuthActions';
import {ActionsProvider} from '../contexts/ActionsContext';
import {Switch, Route} from 'react-router-dom';
import Form from './Form';
import List from './list/List';
import {usePartyActions} from '../store/party/usePartyActions';
import Navigation from './navigation/Navigation';

const App = () => {
  const authActions = useAuthActions();
  const partyActions = usePartyActions();

  return (
     <ActionsProvider value={{ authActions, partyActions }}>
       <Navigation/>
        <Switch>
          <Route path='/list' component={List} />
          <Route path='/dashboard' component={Form} />
          <Route path='/register' render={props => <Login {...props} />}/>
          <Route path='/login' render={props => <Login {...props} />}/>
        </Switch>
      </ActionsProvider>
  );
};

export default App;


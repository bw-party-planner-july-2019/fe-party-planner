import React from 'react';
import {useAuthActions} from '../store/auth/useAuthActions';
import {ActionsProvider} from '../contexts/ActionsContext';
import {Switch, Route} from 'react-router-dom';
import Form from './Form';

const App = () => {
  const authActions = useAuthActions();

  return (
      <ActionsProvider value={{authActions}}>
        <Switch>
          <Route path='/' render={(props) => <Form />}/>
        </Switch>
      </ActionsProvider>
  );
};

export default App;
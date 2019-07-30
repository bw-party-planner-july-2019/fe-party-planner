import React from 'react';
import styled from 'styled-components'
import Login from './Login';
import {useAuthActions} from '../store/auth/useAuthActions';
import {ActionsProvider} from '../contexts/ActionsContext';
import {Switch, Route} from 'react-router-dom';
import Form from './Form';
import List from './list/List';
import {usePartyActions} from '../store/party/usePartyActions';
import Navigation from './navigation/Navigation';
import Homepage from './homepage/Homepage';
import party from '../imgs/party.jpg';
import CssBaseline from '@material-ui/core/CssBaseline';

const BackgroundImage = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-image: linear-gradient(90deg, rgba(255,255,255,0.1) 0, rgba(255,255,255,0.1) 100%), url(${party});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const App = () => {
  const authActions = useAuthActions();
  const partyActions = usePartyActions();

  return (
     <ActionsProvider value={{ authActions, partyActions }}>
       <CssBaseline/>
       <BackgroundImage>
       <Navigation/>
        <Switch>
          <Route path='/list' component={List} />
          <Route path='/dashboard' component={Form} />
          <Route path='/register' render={props => <Login {...props} />}/>
          <Route path='/login' render={props => <Login {...props} />}/>
          <Route path='/' component={Homepage} />
        </Switch>
       </BackgroundImage>
      </ActionsProvider>
  );
};

export default App;


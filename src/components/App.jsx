import React from 'react';
import styled from 'styled-components';
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
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import Dashboard from './Dashboard/Dashboard';
import PrivateRoute from './auth/PrivateRoute';
import Party from './Dashboard/Party';

const theme = createMuiTheme({
  palette: {
    primary: {main: '#B33771'},
    secondary: {main: '#FEA47F'},
  },
});

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
      <MuiThemeProvider theme={theme}>
        <ActionsProvider value={{authActions, partyActions}}>
          <CssBaseline/>
          <BackgroundImage>
            <Navigation/>
            <Switch>
              <Route path='/list' component={List}/>
              <Route path='/dashboard' component={Dashboard}/>
              <PrivateRoute path='/dashboard' component={Dashboard}/>

              <Route path='/register' render={props => <Login {...props} />}/>
              <Route exact path='/' render={props => <Login {...props} />}/>
            </Switch>
          </BackgroundImage>
        </ActionsProvider>
      </MuiThemeProvider>
  );
};

export default App;

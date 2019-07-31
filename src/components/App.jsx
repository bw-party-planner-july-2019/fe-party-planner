import React from 'react';
import styled from 'styled-components';
import Login from './Login';
import {useAuthActions} from '../store/auth/useAuthActions';
import {ActionsProvider} from '../contexts/ActionsContext';
import {Route, Switch} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import AddPartyForm from './Dashboard/AddPartyForm';
import List from './list/List';
import {usePartyActions} from '../store/party/usePartyActions';
import Navigation from './navigation/Navigation';
import party from '../imgs/party.jpg';
import CssBaseline from '@material-ui/core/CssBaseline';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import Dashboard from './Dashboard/Dashboard';
import PrivateRoute from './auth/PrivateRoute';
import Party from './Dashboard/Party';

const theme = createMuiTheme({
  typography: {},
  palette: {
    primary: {main: '#B33771'},
    secondary: {main: '#FEA47F'},
  },
});

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 3.5% 0;
  background-attachment: fixed;
  background-image: linear-gradient(90deg, rgba(255,255,255,0.1) 0, rgba(255,255,255,0.1) 100%), url(${party});
  background-repeat: repeat;
  background-position: center center;
  background-size: cover;
`;

const list = [
  {id: 1, party_id: 1, item: 'balloons', purchased: false, price: 5},
  {id: 2, party_id: 1, item: 'drinks', purchased: false, price: 55},
  {id: 3, party_id: 1, item: 'cake', purchased: false, price: 20},
  {id: 4, party_id: 2, item: 'juice', purchased: false, price: 5},
  {id: 5, party_id: 2, item: 'cups', purchased: false, price: 10},
  {id: 6, party_id: 2, item: 'cookies', purchased: false, price: 15},
  {id: 7, party_id: 3, item: 'decorations', purchased: false, price: 25},
  {id: 8, party_id: 3, item: 'candy', purchased: false, price: 20},
  {id: 9, party_id: 3, item: 'music', purchased: false, price: 10},
];

const App = () => {
  const authActions = useAuthActions();
  const partyActions = usePartyActions();

  return (
      <MuiThemeProvider theme={theme}>
        <ActionsProvider value={{authActions, partyActions}}>
          <CssBaseline/>
          <BackgroundImage>
            <Navigation/>
            <Container fluid>
              <Switch>
                <PrivateRoute path='/dashboard/view-party/:id' component={Party} />
                <PrivateRoute path='/dashboard/edit-party/:id' component={AddPartyForm} />
                <PrivateRoute path='/dashboard/add-party'
                              component={AddPartyForm}/>
                <Route path='/list'
                       render={() => <List party_id={1} list={list}/>}/>
                <PrivateRoute path='/dashboard' component={Dashboard}/>
                <Route path='/register' render={props => <Login {...props} />}/>
                <Route path='/' render={props => <Login {...props} />}/>
              </Switch>
            </Container>
          </BackgroundImage>
        </ActionsProvider>
      </MuiThemeProvider>
  );
};

export default App;

import React from 'react';
import { useAuthActions } from '../store/auth/useAuthActions';
import { ActionsProvider } from '../contexts/ActionsContext';
import { Switch, Route } from 'react-router-dom';
import { usePartyActions } from '../store/party/usePartyActions';

const App = () => {
	const authActions = useAuthActions();
	const partyActions = usePartyActions();

	return (
		<ActionsProvider value={{ authActions, partyActions }}>
			<Switch>
				<Route path='/' render={() => <h1>Hello World</h1>} />
			</Switch>
		</ActionsProvider>
	);
};

export default App;

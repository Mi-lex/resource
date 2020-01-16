import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainLayout from './MainLayot';
import Content from '../components/Content';
import store from '../redux/store/configureStore';
import Home from './pages/Home';
// import District from './pages/District';

export default function App() {
	return (
		<Provider store={store}>
			<Router>
				<MainLayout />
				<Content>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						{/* <Route exact path="/district">
							<District />
						</Route> */}
					</Switch>
				</Content>
			</Router>
		</Provider>
	);
}

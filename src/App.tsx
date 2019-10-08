import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import MoviesPage from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';
import { Container } from 'semantic-ui-react';
import history from './routes/history';

const App: React.FC = () => {
	return (
		<Router history={history}>
			<Navbar />
			<Container style={{ marginTop: '6rem' }}>
				<Switch>
					<PrivateRoute exact={true} path="/" component={MoviesPage} />
					<PrivateRoute exact={true} path="/movies" component={MoviesPage} />
					<PrivateRoute path="/movie/:movieId" component={MovieDetail} />
					<Route path="/signup" component={SignUp} />
					<Route path="/login" component={Login} />
					<Route path="/logout" component={Logout} />
				</Switch>
			</Container>
		</Router>
	);
};

export default App;

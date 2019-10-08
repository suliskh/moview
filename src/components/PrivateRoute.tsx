import React from 'react';
import { connect } from 'react-redux';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { RootState } from '../store';
import { LOCAL_STORAGE_AUTHENTICATED_USER } from '../services/config';

interface PrivateRouteProps extends RouteProps {
	isAuthenticated: boolean;
}

class PrivateRoute extends Route<PrivateRouteProps> {
	render() {
		const storedUser = localStorage.getItem(LOCAL_STORAGE_AUTHENTICATED_USER);

		if (!this.props.isAuthenticated && !storedUser) {
			const renderComponent = () => <Redirect to={{ pathname: '/login' }} />;
			return <Route {...this.props} component={renderComponent} />;
		} else {
			return <Route {...this.props} />;
		}
	}
}

const mapStateToProps = ({ auth }: RootState) => ({
	isAuthenticated: auth.isLoginSuccess,
});

export default connect(mapStateToProps)(PrivateRoute);

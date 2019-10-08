import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as fromAuthActions from '../store/auth/actions';

interface DispatchProps {
	logout: typeof fromAuthActions.logout;
}
type LogoutProps = DispatchProps;

function Logout({ logout }: LogoutProps) {
	logout();

	return <Redirect to="/login" />;
}

const mapDispatchToProps = (dispatch: any): DispatchProps =>
	bindActionCreators({ logout: fromAuthActions.logout }, dispatch);

export default connect(
	null,
	mapDispatchToProps
)(Logout);

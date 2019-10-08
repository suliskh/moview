import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import {
	Button,
	Container,
	Dimmer,
	Form,
	Header,
	Loader,
	Message,
} from 'semantic-ui-react';
import { RootState } from '../store';
import * as fromAuthActions from '../store/auth/actions';

interface LoginState {
	username: string;
	password: string;
}

interface DispatchProps {
	login: typeof fromAuthActions.login;
}
interface StateProps {
	isLoading: boolean;
	isLoginSuccess: boolean;
	isLoginFailed: boolean;
	message: string;
}
type LoginProps = DispatchProps & StateProps;

class Login extends React.Component<LoginProps, LoginState> {
	constructor(props: LoginProps, state: LoginState) {
		super(props, state);

		this.state = {
			username: '',
			password: '',
		};

		this._handleInputChange = this._handleInputChange.bind(this);
		this._handleSubmit = this._handleSubmit.bind(this);
	}

	_handleInputChange(e: React.FormEvent<HTMLInputElement>) {
		const { name, value } = e.currentTarget;
		this.setState({
			...this.state,
			[name]: value,
		});
	}

	_handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		console.log('Form: SUBMITED');
		const { username, password } = this.state;
		this.props.login(username, password);
	}

	render() {
		const { isLoginFailed, isLoading, message } = this.props;

		return (
			<Container text>
				<Header size="large">Login</Header>

				{isLoginFailed && message !== '' && (
					<Message negative>
						<Message.Header>Login was failed.</Message.Header>
						<p>
							{message}
						</p>
					</Message>
				)}

				<Form onSubmit={this._handleSubmit}>
					{isLoading && (
						<Dimmer inverted={true} active>
							<Loader />
						</Dimmer>
					)}

					<Form.Field>
						<label htmlFor="username">Username</label>
						<input
							placeholder="Username"
							id="username"
							name="username"
							required={true}
							onChange={this._handleInputChange}
						/>
					</Form.Field>
					<Form.Field>
						<label htmlFor="password">Password</label>
						<input
							placeholder="Password"
							id="password"
							name="password"
							type="password"
							required={true}
							onChange={this._handleInputChange}
						/>
					</Form.Field>
					<Button type="submit">Submit</Button>
				</Form>
			</Container>
		);
	}
}

const mapStateToProps = ({ auth }: RootState): StateProps => ({
	isLoading: auth.isLoading,
	isLoginSuccess: auth.isLoginSuccess,
	isLoginFailed: auth.isLoginFailed,
	message: auth.message,
});
const mapDispatchToProps = (
	dispatch: ThunkDispatch<{}, {}, any>
): DispatchProps =>
	bindActionCreators({ login: fromAuthActions.login }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);

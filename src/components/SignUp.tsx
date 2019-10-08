import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Link } from 'react-router-dom';
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

interface SignUpState {
	username: string;
	password: string;
}

interface DispatchProps {
	signUp: typeof fromAuthActions.signUp;
}
interface StateProps {
	isLoading: boolean;
	isSignUpSuccess: boolean;
	isSignUpFailed: boolean;
	message: string;
}
type SignUpProps = DispatchProps & StateProps;

class SignUp extends React.Component<SignUpProps, SignUpState> {
	constructor(props: SignUpProps, state: SignUpState) {
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
		this.props.signUp(username, password);
	}

	render() {
		const { isSignUpSuccess, isSignUpFailed, isLoading, message } = this.props;

		return (
			<Container text>
				<Header size="large">Registration</Header>

				{isSignUpSuccess && (
					<Message positive>
						<Message.Header>
							Your user registration was successful
						</Message.Header>
						<p>
							You may now <Link to="/login">login</Link> with the username you
							have chosen
						</p>
					</Message>
				)}

				{isSignUpFailed && message !== '' && (
					<Message negative>
						<Message.Header>Your user registration was failed</Message.Header>
						<p>{message}</p>
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
	isSignUpSuccess: auth.isSignUpSuccess,
	isSignUpFailed: auth.isSignUpFailed,
	message: auth.message,
});
const mapDispatchToProps = (
	dispatch: ThunkDispatch<{}, {}, any>
): DispatchProps =>
	bindActionCreators({ signUp: fromAuthActions.signUp }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignUp);

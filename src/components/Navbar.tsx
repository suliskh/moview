import React from 'react';
import { connect } from 'react-redux';
import { Container, Image, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { RootState } from '../store';
import { LOCAL_STORAGE_AUTHENTICATED_USER } from '../services/config';

interface StateProps {
	isLoginSuccess: boolean;
}

type NavbarProps = StateProps;

function Navbar({ isLoginSuccess }: NavbarProps) {
	const storedUser = localStorage.getItem(LOCAL_STORAGE_AUTHENTICATED_USER);
	const isAuthenticated = isLoginSuccess || storedUser;

	return (
		<Menu fixed="top" inverted>
			<Container>
				<Menu.Item as="a" size="large" header>
					<Image
						size="mini"
						src="/logo-192x192.png"
						style={{ marginRight: '1.5em' }}
					/>
					Moview
				</Menu.Item>
				{isAuthenticated ? (
					<>
						<Menu.Item>
							<Link to="/movies">Movies</Link>
						</Menu.Item>
						<Menu.Menu position="right">
							<Menu.Item>
								<Link to="/logout">Logout</Link>
							</Menu.Item>
						</Menu.Menu>
					</>
				) : (
					<Menu.Menu position="right">
						<Menu.Item>
							<Link to="/login">Login</Link>
						</Menu.Item>
						<Menu.Item>
							<Link to="/signup">Sign Up</Link>
						</Menu.Item>
					</Menu.Menu>
				)}
			</Container>
		</Menu>
	);
}

const mapStateToProps = ({ auth }: RootState): StateProps => ({
	isLoginSuccess: auth.isLoginSuccess,
});

export default connect(mapStateToProps)(Navbar);

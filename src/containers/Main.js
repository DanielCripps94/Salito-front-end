import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import SignInForm from '../components/SignInForm';
import Header from '../components/navbar/Header'

class Main extends Component {
	state = {
		user: this.props.user
	};

	

	

	render() {
		const signOut = () => {
			this.setState({
				user: null
			});
			localStorage.removeItem('token');
		};
		return (
			<Fragment>
				
				
				Im logged in
				
						
				<button onClick={signOut}>Sign Out</button>
			</Fragment>
		);
	}
}

export default Main;

// <span className="text">Resizable square with a locked aspect ratio.</span>

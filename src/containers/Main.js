import React, { Component } from 'react';
// import SignInForm from '../components/SignInForm';

class Main extends Component {
	state = {
	user: this.props.user
	}
	

	
	render() {
		const signOut = () => {
			this.setState({
				user: null
			});
			localStorage.removeItem('token');
		};
		return (
            <div>
				Im logged in
					<button onClick={signOut}>Sign Out</button>
			</div>
		);
	}
}

export default Main;

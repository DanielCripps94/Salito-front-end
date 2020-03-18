import React from 'react';
import API from '../../API';

class SignInForm extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			name: null
		};
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();

		API.signIn(this.state).then(data =>
			this.props.signIn(data.user, data.token)
		);
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>Email:</label>
				<input type="text" name="email" onChange={this.handleChange} />
				<br />

				<label>Password:</label>
				<input type="password" name="password" onChange={this.handleChange} />
				<br />

				<input type="submit" value="Sign In" />
			</form>
		);
	}
}

export default SignInForm;

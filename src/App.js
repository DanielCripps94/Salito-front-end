import React, { Component } from 'react';
import './App.css';
import Main from './containers/Main';
import SignInForm from './components/SignInForm';
import API from './API'

class App extends Component {
	state = {
		user: null
  };
  
  componentDidMount() {
    if (localStorage.token) {
      API.validate(localStorage.token)
      .then(json => this.signIn(json.user, json.token))
    }
  }

  signIn = (user, token) => {
    
		this.setState({
			user
		});
		localStorage.token = token;
	};

	render() {
		const { user } = this.state;

		return (
			<div>
				{this.state.user ? (
					<Main user={user} />
				) : (
					<SignInForm signIn={this.signIn} />
				)}
			</div>
		);
	}
}

export default App;

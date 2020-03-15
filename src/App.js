import React, { Component, Fragment } from 'react';
import Main from './containers/Main';
import SignInForm from './components/SignInForm';
import API from './API';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
// import SignInForm from '../components/SignInForm';
import Header from '../src/components/navbar/Header'
import Landing from './components/landing/Landing'
import Home from './components/home/Home'

class App extends Component {
	state = {
		user: null
	};

	componentDidMount() {
		if (localStorage.token) {
			API.validate(localStorage.token).then(json =>
				this.signIn(json.user, json.token)
			);
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
			<Fragment>
				<BrowserRouter>
					<Header />
					<Route exact path="/" component={Landing} />
					<Route exact path="/home" component={Home} />
				</BrowserRouter>
			</Fragment>
		);
	}
}

export default App;

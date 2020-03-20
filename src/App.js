import React, { Component, Fragment } from 'react';
import Main from './containers/Main';
import SignInForm from './components/auth/SignInForm';
import API from './API';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import SignUpForm from '../src/components/auth/SignUpForm'
import Header from '../src/components/navbar/Header'
import Landing from './components/landing/Landing'
import Home from './components/home/Home'

class App extends Component {
	state = {
		user: null,
		modalOpen: false
	};

	componentDidMount() {
		if (localStorage.token) {
			API.validate(localStorage.token).then(json =>
				this.signIn(json.user, json.token)
			);
		}
	}

	signUp = (user, token) => {
		this.setState({
			user
		});
		localStorage.token = token;
	}
	signIn = (user, token) => {
		this.setState({
			user
		});
		localStorage.token = token;
	};

	

	toggleModal = () => {
		this.setState({
			modalOpen:  !this.state.modalOpen
		})
	}

	render() {
		const { user } = this.state;

		return (
			<Fragment>
				<BrowserRouter>
					<Header toggleModal={this.toggleModal} />
					{/* <SignUpForm/> */}
					<Route exact path="/">
						<Landing modalOpen={this.state.modalOpen} signIn={this.signIn}/>
					</Route>
					<Route exact path="/home" component={Home} />
				</BrowserRouter>
			</Fragment>
		);
	}
}

export default App;

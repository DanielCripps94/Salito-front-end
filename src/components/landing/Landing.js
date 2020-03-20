import React from 'react';
import './Landing.css';
import SignInForm from '../auth/SignInForm';
import SignUpForm from '../auth/SignUpForm';

const Landing = props => {
	return (
		<section className="landing">
			{props.modalOpen ? <SignInForm signIn={props.signIn} /> : null}
			{props.modalOpen ? <SignUpForm  /> : null}

		</section>
	);
};

export default Landing;

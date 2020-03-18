import React from 'react';
import './Landing.css';
import SignInForm from '../auth/SignInForm';

const Landing = props => {
	return (
		<section className="landing">
			{props.modalOpen ? <SignInForm signIn={props.signIn} /> : null}
		</section>
	);
};

export default Landing;

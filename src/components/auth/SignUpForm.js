import React, { Component } from 'react';
import API from '../../API';


class SignUpForm extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            name: ''
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        API.signUp(this.state).then(data =>
            this.props.signUp(data.user, data.token)
        );
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Email:</label>
                <input type="text" name="email" onChange={this.handleChange} />
                <br />

                <label>Full name:</label>
                <input type="text" name="full name" onChange={this.handleChange} />
                <br />

                <label>Password:</label>
                <input type="password" name="password" onChange={this.handleChange} />
                <br />

                <input type="submit" value="Sign Up" />
            </form>
        );
    }
}

export default SignUpForm;

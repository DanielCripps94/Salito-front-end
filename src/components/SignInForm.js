import React from 'react'


class SignInForm extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const configObject = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify(this.state)
        }
        fetch('http://localhost:3000/sign-in', configObject)
            .then(response => response.json())
            .then(json => signIn(json.name))

            
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Email:</label>
                <input type="text" name="email" onChange={this.handleChange} /><br />

                <label>Password:</label>
                <input type="password" name="password" onChange={this.handleChange} /><br />

                <input type="submit" value="Sign In" />
            </form>
        )
    }
}

export default SignInForm
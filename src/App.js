import React, { Component } from 'react';
import './App.css';
import Main from './containers/Main'

class App extends Component {
  state = {
    name: null
  }

  signIn = (name) => {
    this.setState({
      name
    })
  }

  render() {
    return (
      <div>
        <Main />
        
      </div>
    );
  }
}

export default App;

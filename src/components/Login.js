import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    /* Uncontrolled components as the state is residing in the dom and not in   the react state */
    // this.emailInputRef = React.createRef();
    // this.passwordInputRef = React.createRef();
    this.state = {
      email: '',
      password: '',
    };
  }
  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('State: ', this.state);
    // console.log('Email: ', this.emailInputRef);
    // console.log('Password: ', this.passwordInputRef);
  };
  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            required
            /* Part of uncontrolled component method */
            // ref={this.emailInputRef}
            onChange={this.handleEmailChange}
            value={this.state.email}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="*******"
            required
            /* Part of uncontrolled component method */
            // ref={this.passwordInputRef}
            onChange={this.handlePasswordChange}
            value={this.state.password}
          />
        </div>
        <div className="field">
          <button onClick={this.handleFormSubmit}>Log In</button>
        </div>
      </form>
    );
  }
}

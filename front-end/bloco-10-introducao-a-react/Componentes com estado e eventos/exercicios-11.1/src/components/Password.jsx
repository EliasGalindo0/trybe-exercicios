import React from "react";

class Password extends React.Component {
  constructor() {
    super()
    this.state = {
      password: '',
    }
    this.handlePassword = this.handlePassword.bind(this);
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value,
    }, console.log(event.target.value))
  };

  render() {
    return (
      <div className="password--input">
        <label htmlFor="pass">Password</label>
        <input type="password" id="pass" onChange={this.handlePassword}/>
      </div>
    )
  }
}

export default Password;

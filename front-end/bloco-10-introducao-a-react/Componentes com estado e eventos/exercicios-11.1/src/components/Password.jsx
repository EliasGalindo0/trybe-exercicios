import React from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

class Password extends React.Component {
  constructor() {
    super()
    this.state = {
      password: '',
      eyePassword: true
    }
    this.handlePassword = this.handlePassword.bind(this);
    this.handleEyePassword = this.handleEyePassword.bind(this);
  }

  handlePassword(event) {
    this.setState(
    {
      password: event.target.value
    })
  };

  handleEyePassword() {
    this.setState((prevState) => ({
      eyePassword: !prevState.eyePassword
    }));
  }

  render() {
    const { eyePassword } = this.state;
    return (
      <div className="password--input">
        <label htmlFor="pass">Password</label>
        <input
        type={eyePassword ? "text" : "password"} 
        id="pass" 
        onChange={this.handlePassword}/>
        {eyePassword ? (
          <FaEye className="eye" onClick={this.handleEyePassword} />
        ) : (
          <FaEyeSlash className="eye" onClick={this.handleEyePassword} />
        )}
      </div>
    )
  }
}

export default Password;

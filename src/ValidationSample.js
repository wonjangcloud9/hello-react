import React, { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  input = React.createRef();

  handleFocus = () => {
    this.input.current.focus();
  };

  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
    this.input.focus();
  };

  render() {
    return (
      <div>
        <input
          ref={(input) => (this.input = input)}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>Validate</button>
      </div>
    );
  }
}

export default ValidationSample;

import React, { Component } from "react";

class Login extends Component {
  state = { email: "", password: "" };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (event) => {
    alert("email:" + this.state.email);
    alert("password:" + this.state.password);
    event.preventDefault();
  };
  render() {
    return (
      <div className="pl-5 pr-5">
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              name="password"
              class="form-control"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;

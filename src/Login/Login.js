import React, { Component } from "react";

class Login extends Component {
  state = { email: "", password: "" };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (event) => {
    alert("email:" + this.state.email);
    alert("password:" + this.state.password);
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="pl-5 pr-5">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              name="password"
              class="form-control"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="button"
            class="btn btn-primary"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;

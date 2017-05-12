import React, { Component } from 'react';
import classnames from 'classnames';

import { signinValidateUser } from '../../../validate/signin';

class FormPg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      password: '',
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    if(!!this.state.errors[e.target.name]) {
      let errors = Object.assign({}, this.state.errors);
      delete errors[e.target.name];
      this.setState({ [e.target.name]: e.target.value, errors })
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
  }

  isValid() {
    let { errors, isValid } = signinValidateUser(this.state);
    if(!isValid) {
      this.setState({ errors })
    }
    return isValid;
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.isValid()) {
      this.setState({ errors: {} })
      this.props.getUserLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="info foj">
          <span className="df or">OR</span>
        </div>
        <div className={ classnames('form-group', {'error': this.state.errors.identifier}) }>
          <input type="text" placeholder="Email or Username" className="form-control frm_inpt" name="identifier"
            onChange={this.handleChange} autoComplete="off" value={this.state.identifier}/>
          <div className="_err">
            <span className="seru">!</span>
          </div>
        </div>
        <div className={ classnames('form-group', {'error': this.state.errors.password}) }>
          <input type="password" placeholder="Password" className="form-control frm_inpt" name="password"
            onChange={this.handleChange} value={this.state.password}/>
          <div className="_err">
            <span className="seru">!</span>
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block bt-rg">Log In</button>
        </div>
        <div className="info">
          <span className="df">Don't have an account? <a href="/signup">Sign Up</a></span>
        </div>
      </form>
    )
  }
}

export default FormPg;

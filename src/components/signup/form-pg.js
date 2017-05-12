import React, { Component } from 'react';
import classnames from 'classnames';

import { addUserValidate } from '../../../validate/signup';

class FormPg extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      gender: '',
      confirm_password: '',
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkUserExist = this.checkUserExist.bind(this);
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
    let {errors, isValid} = addUserValidate(this.state);
    if(!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  checkUserExist(e) {
    let field = e.target.name;
    let value = e.target.value;
    if(value !== '') {
      this.props.checkUserExist(value).then((res) => {
        let errors = Object.assign({}, this.state.errors);
        let invalid;
        if(!_.isEmpty(res.data.user)) {
          errors[field] = field + ' is already in use';
          invalid = true;
        } else {
          errors[field] = '';
          invalid = false;
        }
        this.setState({ errors, invalid });
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.isValid()) {
      this.setState({ errors: {} });
      this.props.addNewUser(this.state);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={ classnames('form-group', {'error': this.state.errors.username})}>
          <input type="text" placeholder="Username" className="form-control frm_inpt" name="username"
            onChange={this.handleChange} value={this.state.username} onBlur={this.checkUserExist}/>
          <div className="_err">
            <span className="seru">!</span>
          </div>
        </div>
        <div className={ classnames('form-group', {'error': this.state.errors.email})}>
          <input type="email" placeholder="Email Address" className="form-control frm_inpt" name="email"
            onChange={this.handleChange} value={this.state.email} onBlur={this.checkUserExist}/>
          <div className="_err">
            <span className="seru">!</span>
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-6" style={{paddingLeft: '0px', paddingRight: '6px'}}>
            <div className={ classnames('form-group', {'error': this.state.errors.firstname})}>
              <input type="text" placeholder="First Name" className="form-control frm_inpt" name="firstname"
                onChange={this.handleChange} value={this.state.firstname}/>
              <div className="_err">
                <span className="seru">!</span>
              </div>
            </div>
          </div>
          <div className="col-md-6" style={{paddingRight: '0px', paddingLeft: '6px'}}>
            <div className={ classnames('form-group', {'error': this.state.errors.firstname})}>
              <input type="text" placeholder="Last Name" className="form-control frm_inpt" name="lastname"
                onChange={this.handleChange} value={this.state.lastname}/>
              <div className="_err">
                <span className="seru">!</span>
              </div>
            </div>
          </div>
          <div className="clear"></div>
        </div>
        <div className="form-group">
          <select className="this-gender form-control frm_inpt" name="gender" onChange={this.handleChange} value={this.state.gender}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className={ classnames('form-group', {'error': this.state.errors.password})}>
          <input type="password" placeholder="Password min 7 digits" className="form-control frm_inpt" name="password"
          onChange={this.handleChange} value={this.state.password}/>
          <div className="_err">
            <span className="seru">!</span>
          </div>
        </div>
        <div className={ classnames('form-group', {'error': this.state.errors.confirm_password})}>
          <input type="password" placeholder="Re-type password" className="form-control frm_inpt" name="confirm_password"
          onChange={this.handleChange} value={this.state.confirm_password}/>
          <div className="_err">
            <span className="seru">!</span>
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block bt-rg">Sign Up</button>
        </div>
        <div className="info">
          <span className="df">Already have an account? <a href="/signin">Log In</a></span>
        </div>
      </form>
    )
  }
}

export default FormPg;

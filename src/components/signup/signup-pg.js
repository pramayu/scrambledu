import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormPg from './form-pg';
import { addNewUser, checkUserExist } from '../../actions/signup';

class SignupPg extends Component {
  to_facebook() {
    window.location = '/signup/auth/facebook'
  }
  to_google() {
    window.location = '/signup/auth/google'
  }
  render() {
    let { addNewUser, checkUserExist } = this.props;
    return (
      <div className="signup-pg">
        <div className="titl">
          <h2 className="text-center">_Scrambledu.</h2>
          <span className="sub-ca">Improve Your Skills and Knowledge with Us</span>
        </div>
        <div className="col-md-6 lf_">
          <ul className="list-unstyled">
            <li className="bt-start">
              <button className="btn btn-block btn-gg" onClick={this.to_google.bind(this)}>Sign up with Google</button>
            </li>
            <li>
              <button className="btn btn-block btf-fb" onClick={this.to_facebook.bind(this)}>Sign up with Facebook</button>
            </li>
          </ul>
        </div>
        <div className="col-md-6 rg_">
          <FormPg addNewUser={addNewUser} checkUserExist={checkUserExist}/>
        </div>
        <div className="clear"></div>
      </div>
    );
  }
}

export default connect(null, { addNewUser, checkUserExist })(SignupPg);

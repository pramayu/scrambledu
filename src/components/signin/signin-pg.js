import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormPg from './form-pg';
import { getUserLogin } from '../../actions/signin';

class SigninPg extends Component {
  render() {
    let { getUserLogin } = this.props;
    return (
      <div className="signup-pg">
        <div className="titl">
          <h2 className="text-center">_Scrambledu.</h2>
          <span className="sub-ca">Improve Your Skills and Knowledge with Us</span>
        </div>
          <div className="center_">
            <ul className="list-unstyled">
              <li className="bt-start">
                <button className="btn btn-block btn-gg">Sign In with Google</button>
              </li>
              <li>
                <button className="btn btn-block btf-fb">Sign In with Facebook</button>
              </li>
            </ul>
            <FormPg getUserLogin={getUserLogin}/>
          </div>
        <div className="clear"></div>
      </div>
    );
  }
}

export default connect(null, { getUserLogin })(SigninPg);

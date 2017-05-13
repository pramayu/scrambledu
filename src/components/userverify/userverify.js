import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getVerifyUser } from '../../actions/signin';

class UserVerify extends Component {
  componentWillMount() {
    this.props.getVerifyUser(this.props.params.usertoken)
  }
  render() {
    return (
      <div>

      </div>
    )
  }
}

export default connect(null, { getVerifyUser })(UserVerify);

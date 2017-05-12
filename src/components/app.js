import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getFacebookUser } from '../actions/signin';

class App extends Component {

  componentWillMount() {
    this.props.getFacebookUser()
  }

  render() {
    return (
      <div>
        <h1>Hello from react...</h1>
      </div>
    );
  }
};

export default connect(null, { getFacebookUser })(App);

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getFacebookUser } from '../actions/signin';
import { getCategories } from '../actions/categories';
import Navbar from '../shared/navbar';

class App extends Component {

  componentWillMount() {
    this.props.getFacebookUser();
    this.props.getCategories();
  }

  render() {
    return (
      <div>
        <Navbar categories={this.props.categories}/>
      </div>
    );
  }
};

function mapStateToProps(state) {
  let categories = Object.assign([], state.categories);
  return {
    categories: categories
  }
}

export default connect(mapStateToProps, { getFacebookUser, getCategories })(App);

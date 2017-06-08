import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getFacebookUser } from '../actions/signin';
import { getCategories } from '../actions/categories';
import { setFetchCommons } from '../actions/commons';
import Navbar from '../shared/navbar';
import MainPage from './home/main';

class App extends Component {

  componentWillMount() {
    this.props.getFacebookUser();
    this.props.getCategories();
    this.props.setFetchCommons();
  }

  render() {
    let { categories, commons } = this.props;
    return (
      <div>
        <Navbar categories={categories} />
        <MainPage commons={commons}/>
      </div>
    );
  }
};

function mapStateToProps(state) {
  let categories = Object.assign([], state.categories);
  return {
    categories: categories,
    commons: state.commons
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getFacebookUser: () => dispatch(getFacebookUser()),
    getCategories: () => dispatch(getCategories()),
    setFetchCommons: () => dispatch(setFetchCommons())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

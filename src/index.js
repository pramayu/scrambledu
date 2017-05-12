import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { Router, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import jwt from 'jsonwebtoken';

import routes from './routers/index';
import rootReducers from './reducers/index';
import sty from './shared/sty.scss';
import { setCurrentUser } from './actions/signin';
import setAuthorization from './shared/authorization';

let store = createStore(
  rootReducers,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

if(localStorage.jwtToken) {
  setAuthorization(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
}

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('root')
);

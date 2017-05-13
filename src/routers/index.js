import { Route, indexRoute } from 'react-router';
import App from '../components/app';
import SignupPg from '../components/signup/signup-pg';
import SigninPg from '../components/signin/signin-pg';
import UserVerify from '../components/userverify/userverify';

module.exports = {
  path: '/',
  indexRoute: { component: App },
  childRoutes: [
    { path: 'signup', component: SignupPg },
    { path: 'signin', component: SigninPg },
    { path: 'verify/user/:usertoken', component: UserVerify }
  ]
};

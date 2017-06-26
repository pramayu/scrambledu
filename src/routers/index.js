import { Route, indexRoute } from 'react-router';
import App from '../components/app';
import SignupPg from '../components/signup/signup-pg';
import SigninPg from '../components/signin/signin-pg';
import UserVerify from '../components/userverify/userverify';
import Dashboard from '../components/dashboard/dashboard';
import DashChild from '../components/dashboard/children/dashchild';
import UserSetting from '../components/dashboard/children/usersetting';
import Collection from '../components/dashboard/children/collection';

module.exports = {
  path: '/',
  indexRoute: { component: App },
  childRoutes: [
    { path: 'signup', component: SignupPg },
    { path: 'signin', component: SigninPg },
    { path: 'verify/user/:usertoken', component: UserVerify },
    {
      path: 'user',
      component: Dashboard,
      childRoutes: [
        { path: 'dashboard', component: DashChild },
        { path: 'setting', component: UserSetting },
        { path: 'collection', component: Collection }
      ]
    }
  ]
};

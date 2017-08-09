import { Route, indexRoute } from 'react-router';
import App from '../components/app';
import SignupPg from '../components/signup/signup-pg';
import SigninPg from '../components/signin/signin-pg';
import UserVerify from '../components/userverify/userverify';
import Dashboard from '../components/dashboard/dashboard';
import DashChild from '../components/dashboard/children/dashchild';
import UserSetting from '../components/dashboard/children/usersetting';
import Collection from '../components/dashboard/children/collection';
import Reviews from '../components/dashboard/children/reviews';
import Compare from '../components/dashboard/children/compare';
import Favorite from '../components/dashboard/children/favshop';
import MyShop from '../components/dashboard/shop/myshop';

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
        { path: 'collection', component: Collection },
        { path: 'review-product', component: Reviews },
        { path: 'compares', component: Compare },
        { path: 'favorites', component: Favorite },
        { path: 'myshop', component: MyShop }
      ]
    },
    {
      path: 'shop',
      component: Dashboard,
      childRoutes: [
        { path: 'main', component: MyShop } //sementara pake parameter shop name
      ]
    }
  ]
};

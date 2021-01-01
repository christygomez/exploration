import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { useAuth } from './useAuth';

import Login from './containers/LoginPage';

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  let auth = useAuth();

  console.log('authenticated user', auth.user);

//  const redirectAuth = (
  //  <Redirect to={{
  //   pathname: "/login",
  //   state: {
  //     from: location.pathname,
  //   }
  //   }}
  // />
  
  // );
  return (!auth.user.isAuthenticated) ? <Login /> : <Component {...rest} />
};

export default withRouter(PrivateRoute);
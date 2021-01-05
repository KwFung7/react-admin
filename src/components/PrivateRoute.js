import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { LOGIN_ROUTE } from '../constants';
import checkLoginStatus from '../helpers/checkLoginStatus';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      checkLoginStatus() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: LOGIN_ROUTE ,
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
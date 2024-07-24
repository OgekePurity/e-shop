import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  return (
    <Fragment>
      {loading === false && (
        <Route
          {...rest}
          render={(props) => {
            if (!isAuthenticated) {
              // Redirect to login if not authenticated
              return <Redirect to="/login" />;
            }

            if (isAdmin && user && user.role !== 'admin') {
              // Redirect to unauthorized page if not an admin
              return <Redirect to="/unauthorized" />;
            }

            // Render the protected component if authenticated and authorized
            return <Component {...props} />;
          }}
        />
      )}
    </Fragment>
  );
};

export default ProtectedRoute;

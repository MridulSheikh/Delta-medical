import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRout = ({children, ...rest}) => {
    const {user,isLoading}=useAuth();
    if(isLoading){
       return <Spinner animation="border" className="m-5" />
    }
    return (
        <div>
            <Route
            {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
            />
        </div>
    );
};

export default PrivateRout;
import React from 'react';
import { Navigate} from 'react-router-dom';

const PrivateRoute = ({children, redirectTo}) => {
  return (
    localStorage.getItem('userObj') ? children : (<Navigate to={redirectTo} replace />
  ));
  
};

export default PrivateRoute;
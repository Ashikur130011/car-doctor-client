import React, { Children, useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user?.email){
        return children
    }

    return <Navigate state={location.pathname} to="/login"  />;
};

export default ProtectRoute;
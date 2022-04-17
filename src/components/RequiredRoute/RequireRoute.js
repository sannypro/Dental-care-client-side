import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
    Routes,
    Route,
    Link,
    useNavigate,
    useLocation,
    Navigate,
    Outlet,
} from "react-router-dom";
import auth from '../firebase.init';

const RequireRoute = ({ children }) => {
    const [user] = useAuthState(auth);
    let location = useLocation();
    if (!user) {

        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;


};

export default RequireRoute;
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";
import { useEffect } from "react";

function RequiredAuth({ allowedRoles }) {

    const { auth, setAuth } = useAuth()
    const location = useLocation()

    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : auth?.username
                ? <Navigate to='/unauthorized' state={{ from: location }} replace />
                : <Navigate to='/login' state={{ from: location }} replace />
    );
}

export default RequiredAuth;
// /orders and /neworder are protected routes
import { Navigate } from "react-router-dom";
export const ProtectedRoute = ({ children }) => {
    const isAuth=true
    if(!isAuth){
        return <Navigate to="/login"/>
    }
    return children
};

import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../store/UseAuthStore"; 

const AdminRoute = () => {
    const { user } = useAuthStore();

    if (!user?.role) {
        return <Navigate to="/login" replace />;
    }

    if (user.role !== "admin") {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default AdminRoute;

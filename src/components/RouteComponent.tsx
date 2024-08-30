import { RootState } from "@/redux/store";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const ProtectedRoute = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);

  if (user.state === "logout") {
    return <Navigate to="/login" replace />;
  }

  useEffect(() => {
    if (user.data.role === "superadmin") return;
    if (user.data.type === "client" || user.data.role === "admin") {
      if (["/client", "/mis-report"].includes(location.pathname)) {
        navigate("/user");
      }
      return;
    }
  }, [user.data.id]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
};

export const UnProtectedRoute = () => {
  const user = useSelector((state: RootState) => state.user);

  if (user.state === "login") {
    return <Navigate to="/client" replace />;
  }

  return <Outlet />;
};

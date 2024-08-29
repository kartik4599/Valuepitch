import { Navigate, Outlet } from "react-router-dom";
import Header from "./Header";

export const ProtectedRoute = () => {
  if (false) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
};

export const UnProtectedRoute = () => {
  if (false) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

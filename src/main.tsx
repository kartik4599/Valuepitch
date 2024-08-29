import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ClientManagement from "./components/ClientManagement/ClientManagement";
import { ProtectedRoute, UnProtectedRoute } from "./components/RouteComponent";
import UserManagement from "./components/UserManagement/UserManagement";

const router = createBrowserRouter([
  {
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          { path: "/client", element: <ClientManagement /> },
          { path: "/user", element: <UserManagement /> },
          { path: "*", element: <Navigate to={"/client"} /> },
        ],
      },
      {
        element: <UnProtectedRoute />,
        children: [{ path: "/login", element: <div>Up-Protected</div> }],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);

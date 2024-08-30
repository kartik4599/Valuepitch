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
import MISComponent from "./components/Reporting/MIS";
import LoginPage from "./components/LoginPage";
import App from "./app";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ProfilePage from "./components/ProfilePage";

const router = createBrowserRouter([
  {
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          { path: "/client", element: <ClientManagement /> },
          { path: "/user", element: <UserManagement /> },
          { path: "/mis-report", element: <MISComponent /> },
          { path: "/profile", element: <ProfilePage /> },          
          { path: "*", element: <Navigate to={"/client"} /> },
        ],
      },
      {
        element: <UnProtectedRoute />,
        children: [{ path: "/login", element: <LoginPage /> }],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import LoadingPage from "./components/LoadingPage";
import { getMyData } from "./lib/server";
import { RootState } from "./redux/store";
import { loginUser, logoutUser } from "./redux/user-slice";
import { Toaster } from "sonner";
import { addProfile } from "./redux/profile-slice";
import socket from "socket.io-client";

const endpoint = "http://localhost:4500/";

const App = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const socketOperation = (data: any) => {
    const io = socket(endpoint, { query: { data: JSON.stringify(data) } });
    io.on("update", (profile) => {
      dispatch(addProfile(profile));
    });
    io.on("delete", () => {
      navigate("/login");
      dispatch(logoutUser());
    });
  };

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return dispatch(logoutUser());
      const { data, profile } = await getMyData();
      dispatch(loginUser(data));
      dispatch(addProfile(profile));
      socketOperation(data);
    } catch (e) {
      dispatch(logoutUser());
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (user.state === "loading") return <LoadingPage />;

  return (
    <>
      <Toaster richColors closeButton duration={2000} />
      <Outlet />
    </>
  );
};

export default App;

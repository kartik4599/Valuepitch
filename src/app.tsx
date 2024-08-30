import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import LoadingPage from "./components/LoadingPage";
import { getMyData } from "./lib/server";
import { RootState } from "./redux/store";
import { loginUser, logoutUser } from "./redux/user-slice";
import { Toaster } from "sonner";
import { addProfile } from "./redux/profile-slice";
const App = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) return dispatch(logoutUser());
    const { data, profile } = await getMyData();
    dispatch(loginUser(data));
    dispatch(addProfile(profile));
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

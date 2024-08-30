import { createSlice } from "@reduxjs/toolkit";

export interface userState {
  state: "login" | "logout" | "loading";
  data: {
    id: string;
    type: "client" | "user";
    role?: "superadmin" | "admin" | "user";
    industryId?: string;
  };
}

const initialState: userState = {
  state: "loading",
  data: { id: "", type: "user" },
};

const logoutState: userState = {
  state: "logout",
  data: { id: "", type: "user" },
};

const userSlice = createSlice({
  name: "user-slice",
  initialState,
  reducers: {
    loginUser: (_, { payload }) => ({ state: "login", data: payload }),
    logoutUser: () => {
      localStorage.removeItem("token");
      return logoutState;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

interface Industry {
  id: string;
  name: string;
  type: string;
  size: string;
  site: string;
  notes: string;
  updatedAt: string;
  createdAt: string;
  clientId: string;
}
export interface profileState {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  address: string;
  updatedAt: string;
  createdAt: string;
  role?: string;
  industry?: Industry;
}

const initialState: profileState = {
  id: "",
  name: "",
  email: "",
  phone: "",
  password: "",
  address: "",
  updatedAt: "",
  createdAt: "",
};

const profileSlice = createSlice({
  name: "user-slice",
  initialState,
  reducers: {
    addProfile: (_, { payload }) => payload,
  },
});

export const { addProfile } = profileSlice.actions;

export default profileSlice.reducer;

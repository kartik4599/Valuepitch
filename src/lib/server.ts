import axios from "axios";
import { SignInForm } from "./utils";

const baseURL = "http://localhost:4500";

export const unProtectedRequest = axios.create({ baseURL });
export const protectedRequest = () => {
  const headers = { Authorization: `Bearer ${localStorage?.getItem("token")}` };
  return axios.create({
    baseURL,
    headers,
  });
};

export const loginAccount = async (payload: SignInForm) => {
  const { data } = await unProtectedRequest.post("/login", payload);
  return data;
};

export const getMyData = async () => {
  const { data } = await protectedRequest().get("/me");
  return data;
};

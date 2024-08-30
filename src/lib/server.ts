import axios from "axios";
import { ClientForm, SignInForm } from "./utils";

const baseURL = "http://localhost:4500";

export const unProtectedRequest = axios.create({ baseURL });
export const protectedRequest = () => {
  const headers = { Authorization: `Bearer ${localStorage?.getItem("token")}` };
  return axios.create({
    baseURL,
    headers,
  });
};

export const fetcher = async (path: string) => {
  const { data } = await protectedRequest().get(path);
  return data.data;
};

export const loginAccount = async (payload: SignInForm) => {
  const { data } = await unProtectedRequest.post("/login", payload);
  return data;
};

export const getMyData = async () => {
  const { data } = await protectedRequest().get("/me");
  return data;
};

export const getReportData = async (type: string) => {
  const { data } = await protectedRequest().get("/report", {
    params: { type },
  });
  return data;
};

export const createClient = async (payload: ClientForm) => {
  const { data } = await protectedRequest().post("/client", payload);
  return data;
};

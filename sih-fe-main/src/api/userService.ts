import { AxiosRequestConfig } from "axios";
import axios from "./Instance";

let interceptor: number;
const SESSION_STORAGE_KEY = "sihkechode";

const getCurrentUser = () => {
  const userData = localStorage.getItem(SESSION_STORAGE_KEY);
  return userData ? JSON.parse(userData) : null;
};

const setCurrentUser = (data: any) => {
  try {
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(data));
    const token = data.token;
    const interceptorFunction = (config: AxiosRequestConfig<any>) => {
      if (config && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    };
    interceptor = axios.interceptors.request.use(interceptorFunction);
  } catch (error: any) {
    console.log(error);
  }
};

const signUp = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string,
  profileType: "Patient" | "Doctor" | "Institute",
  institute: string,
  phone: string,
  dob: string,
  standard: string,
  addressLineOne: string,
  addressLineTwo: string,
  zipCode: string,
  licenseNo: string,
  aicteCode: string
) => {
  try {
    const response = await axios.post("/auth/signup", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      institute,
      profileType,
      phone,
      dob,
      standard,
      addressLineOne,
      addressLineTwo,
      zipCode,
      licenseNo,
      aicteCode,
    });
    if (response.status === 409) {
      throw new Error("Email Already Exists");
    }
    setCurrentUser(response.data);
    return response.data;
  } catch (err) {
    throw new Error("User Registration Failed");
  }
};

const login = async (email: string, password: string) => {
  try {
    const response = await axios.post("/auth/login", {
      email: email,
      password: password,
      type: "user",
    });
    setCurrentUser(response.data);
    return response.data;
  } catch (error: any) {
    let message = "Login Failed";
    if (error.response) {
      message = error.response.data.message;
    }
    throw new Error(message);
  }
};

const logout = async () => {
  await axios.get("/auth/logout");
  localStorage.removeItem(SESSION_STORAGE_KEY);
  axios.interceptors.request.eject(interceptor);
};

const userService = {
  login,
  signUp,
  logout,
  getCurrentUser,
};

export default userService;

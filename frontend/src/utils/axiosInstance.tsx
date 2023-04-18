import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

const baseURL = "http://127.0.0.1:8000";

interface AuthTokensType {
  access: string;
  refresh: string;
}

const authTokens: AuthTokensType | null = localStorage.getItem("authTokens") ? jwt_decode(localStorage.getItem("authTokens")!) : null;

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: { Authorization: `Bearer ${authTokens!.access}` },
});

export default axiosInstance;

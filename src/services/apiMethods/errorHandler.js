import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;
const refreshToken = async () => {
  try {
    const response = axios.post(
      BASE_URL + "/api/v1/facebook-meta-ads/user/access-token",
      {
        refresh_token: localStorage.getItem("refresh_token"),
      }
    );

    localStorage.setItem("token", response.data.data.access_token);
    return response.data.data.access_token;
  } catch {
    window.location.href = "/sign-in"; // Redirect to login if refresh fails
    return false;
  }
};

const errorHandler = async (e) => {
  const statusCode =
    e?.response?.data?.meta?.status_code || e?.response?.data?.code;
  const message =
    e?.response?.data?.meta?.message || e?.response?.data?.message;
};

export default errorHandler;

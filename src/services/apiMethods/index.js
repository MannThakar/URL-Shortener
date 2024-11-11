import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getAPI = (tag = "") => {
  return axios
    .get(BASE_URL + tag)
    .then((res) => {
      if (res?.data?.meta?.code === 0) {
        throw new Error(res?.data?.meta?.message);
      }
      if (res.status === 200) {
        return res?.data;
      }
    })
    .catch((e) => {
      return console.log(e);
    });
};
export const postAPI = (tag = "", reqBody) => {
  return axios
    .post(BASE_URL + tag, reqBody, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
    });
};

export const deleteAPI = (tag = "", reqBody = {}) => {
  return axios
    .delete(BASE_URL + tag, reqBody)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return console.log(e);
    });
};

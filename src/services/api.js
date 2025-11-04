import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export function setAuthToken(token) {
  if (token) api.defaults.headers.common.Authorization = `Bearer ${token}`;
  else delete api.defaults.headers.common.Authorization;
}

function handleError(error) {
  if (error.response) {
    const msg = error.response.data?.message ?? error.response.statusText;
    const e = new Error(msg);
    e.status = error.response.status;
    e.payload = error.response.data;
    throw e;
  }
  throw error;
}

export async function request(config) {
  try {
    const res = await api.request(config);
    return res.data;
  } catch (err) {
    handleError(err);
  }
}

export async function get(path, params = {}, config = {}) {
  return request({ method: "get", url: path, params, ...config });
}

export async function post(path, data = {}, config = {}) {
  return request({ method: "post", url: path, data, ...config });
}

export async function put(path, data = {}, config = {}) {
  return request({ method: "put", url: path, data, ...config });
}

export async function patch(path, data = {}, config = {}) {
  return request({ method: "patch", url: path, data, ...config });
}

export async function del(path, params = {}, config = {}) {
  return request({ method: "delete", url: path, params, ...config });
}

export default api;
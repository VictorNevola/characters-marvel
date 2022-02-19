import axios, { AxiosResponse, Method } from "axios";
import { setupCache } from "axios-cache-adapter";
import md5 from "md5";

const publicKeyApi = process.env.NEXT_PUBLIC_API_KEY_MARVEL;
const privateKeyApi = process.env.NEXT_PUBLIC_API_KEY_MARVEL_PRIVATE;
const timeStamp = new Date().getTime();

if (!publicKeyApi || !privateKeyApi) {
  throw new Error("Keys API Marvel not found");
}

type ResponseFetch<T> = {
  data: T;
  status: number;
};

const cache = setupCache({
  maxAge: 15 * 60 * 1000,
});

const api = axios.create({
  adapter: cache.adapter,
  baseURL: "https://gateway.marvel.com:443/v1/public",
});

api.interceptors.request.use(function (config) {
  return config;
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.error("error api", error);
    return Promise.reject(error);
  }
);

const defaultParams = {
  ts: timeStamp,
  hash: md5(`${timeStamp + privateKeyApi + publicKeyApi}`),
  apikey: publicKeyApi,
};

async function fetch<T>(
  url: string,
  method: Method,
  params?: any,
  headers?: any,
  body?: any
): Promise<ResponseFetch<T>> {
  const dataResponse: AxiosResponse<T> = await api.request({
    url,
    method,
    headers,
    data: body,
    params: {
      ...defaultParams,
      ...params,
    },
  });

  return {
    data: dataResponse.data,
    status: dataResponse.status,
  };
}

export default fetch;

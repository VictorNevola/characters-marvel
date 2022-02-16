import axios, { AxiosResponse, Method } from "axios";
import { setupCache } from "axios-cache-adapter";

const publicKeyApi = process.env.NEXT_PUBLIC_API_KEY_MARVEL;

if(!publicKeyApi) {
  throw new Error('Public Key API Marvel not found');
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
      ...params,
      apikey: publicKeyApi,
    },
  });

  return {
    data: dataResponse.data,
    status: dataResponse.status,
  };
}

export default fetch;
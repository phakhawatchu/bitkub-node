import { AxiosResponse } from 'axios';

const axios = require('axios').default;

const BASE_URL = 'https://api.bitkub.com';

interface errorResultScheme {
  error: String;
  results: Array<Object>;
}

export const getStatus = async (): Promise<Array<Object>> => {
  const response = <AxiosResponse>await axios.get(`${BASE_URL}/api/status`);
  return response.data;
};

export const getServerTime = async (): Promise<Number> => {
  const response = <AxiosResponse>await axios.get(`${BASE_URL}/api/servertime`);
  return <Number>response.data;
};

export const getSymbols = async (): Promise<errorResultScheme> => {
  const response = <AxiosResponse>await axios.get(`${BASE_URL}/api/market/symbols`);
  return response.data;
};

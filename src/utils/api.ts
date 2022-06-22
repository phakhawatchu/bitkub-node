/**
 * @author phakhawatchu
 * @see https://github.com/phakhawatchu
 */

const axios = require('axios').default;
import endpoints from './endpoints';
import { endpointSchema } from './interface';

const BASE_URL = 'https://api.bitkub.com';

export default class API {
  [key: string]: Function;

  constructor() {
    Object.keys(endpoints).forEach((endpoint) => {
      this[endpoint] = this._build_endpoint(endpoints[endpoint]);
    });
  }

  private _build_endpoint(endpoint: endpointSchema) {
    return async () => {
      if (endpoint.secure) return null;
      else return (await axios.get(`${BASE_URL}/${endpoint.path}`)).data;
    };
  }
}

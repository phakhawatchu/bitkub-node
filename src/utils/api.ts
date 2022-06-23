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
      this[endpoint] = this._build_endpoint(endpoint, endpoints[endpoint]);
    });
  }

  private _build_endpoint(name: string, endpoint: endpointSchema) {
    return async (opts: object) => {
      const userOpts: any = opts ? opts : {};
      if (endpoint.secure) {
        return null;
      } else {
        const query = opts
          ? '?' +
            Object.entries(userOpts)
              .map(([key, val]) => `${key}=${val}`)
              .join('&')
          : '';
        const response = await axios.get(`${BASE_URL}/${endpoint.path}${query}`);
        if (response.status === 200) return response.data;
        throw response;
      }
    };
  }
}

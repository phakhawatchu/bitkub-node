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
      this._opts_validation(name, endpoint.opts)(userOpts);
      if (endpoint.secure) {
        return null;
      } else {
        const response = await axios.get(`${BASE_URL}/${endpoint.path}`);
        if (response.status === 200) return response.data;
        throw response;
      }
    };
  }

  private _opts_validation(name: string, endpoint_opts: { [key: string]: boolean }) {
    return (user_opts: object): void => {
      const endpoint_keys = Object.entries(endpoint_opts)
        .filter(([, val]) => val === true)
        .map(([key]) => key);
      const required = endpoint_keys.filter((key) => !Object.keys(user_opts).includes(key));
      if (required.length > 0)
        throw new Error(`${name}() requires {${endpoint_keys.join(', ')}} but {${required.join(', ')}} is missing.`);
    };
  }
}

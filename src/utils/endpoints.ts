/**
 * @author phakhawatchu
 * @see https://github.com/phakhawatchu
 */

import { endpointsSchema } from './interface';

const endpoints: endpointsSchema = {
  status: {
    path: 'api/status',
    secure: false,
  },
  serverTime: {
    path: 'api/servertime',
    secure: false,
  },
  symbols: {
    path: 'api/market/symbols',
    secure: false,
  },
  ticker: {
    path: 'api/market/ticker',
    secure: false,
  },
};

export default endpoints;

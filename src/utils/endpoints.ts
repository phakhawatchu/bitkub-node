/**
 * @author phakhawatchu
 * @see https://github.com/phakhawatchu
 */

import { endpointsSchema } from './interface';

const endpoints: endpointsSchema = {
  status: {
    path: 'api/status',
    secure: false,
    opts: {},
  },
  serverTime: {
    path: 'api/servertime',
    secure: false,
    opts: {},
  },
  symbols: {
    path: 'api/market/symbols',
    secure: false,
    opts: {},
  },
  ticker: {
    path: 'api/market/ticker',
    secure: false,
    opts: {},
  },
  trades: {
    path: 'api/market/trades',
    secure: false,
    opts: {
      lmt: true,
      sym: true,
    },
  },
};

export default endpoints;

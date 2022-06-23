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
  bids: {
    path: 'api/market/bids',
    secure: false,
    opts: {
      lmt: true,
      sym: true,
    },
  },
  asks: {
    path: 'api/market/asks',
    secure: false,
    opts: {
      lmt: true,
      sym: true,
    },
  },
  books: {
    path: 'api/market/books',
    secure: false,
    opts: {
      lmt: true,
      sym: true,
    },
  },
  depth: {
    path: 'api/market/depth',
    secure: false,
    opts: {
      lmt: true,
      sym: true,
    },
  },
  tradingView: {
    path: 'tradingview/history',
    secure: false,
    opts: {
      symbol: true,
      resolution: true,
      from: true,
      to: true,
    },
  },
};

export default endpoints;

/**
 * @author phakhawatchu
 * @see https://github.com/phakhawatchu
 */

import API from './utils/api';
import { errorResultSchema, tradingViewSchema } from './utils/interface';

export default class Bitkub {
  private _api: API;

  constructor() {
    this._api = new API();
  }

  public async status(): Promise<Array<object>> {
    return this._api.status();
  }

  public async serverTime(): Promise<number> {
    return this._api.serverTime();
  }

  public async symbols(): Promise<errorResultSchema> {
    return this._api.symbols();
  }

  public async ticker(): Promise<object> {
    return this._api.ticker();
  }

  public async trades(opts: object): Promise<errorResultSchema> {
    return this._api.trades(opts);
  }

  public async bids(opts: object): Promise<errorResultSchema> {
    return this._api.bids(opts);
  }

  public async asks(opts: object): Promise<errorResultSchema> {
    return this._api.asks(opts);
  }

  public async books(opts: object): Promise<errorResultSchema> {
    return this._api.books(opts);
  }

  public async depth(opts: object): Promise<object> {
    return this._api.depth(opts);
  }

  public async tradingView(opts: object): Promise<tradingViewSchema> {
    return this._api.tradingView(opts);
  }
}

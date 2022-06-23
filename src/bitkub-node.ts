/**
 * @author phakhawatchu
 * @see https://github.com/phakhawatchu
 */

import API from './utils/api';
import { errorResultScheme } from './utils/interface';

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

  public async symbols(): Promise<errorResultScheme> {
    return this._api.symbols();
  }

  public async ticker(): Promise<object> {
    return this._api.ticker();
  }

  public async trades(opts: object): Promise<object> {
    return this._api.trades(opts);
  }
}

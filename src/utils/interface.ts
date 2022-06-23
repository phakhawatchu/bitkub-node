/**
 * @author phakhawatchu
 * @see https://github.com/phakhawatchu
 */

export interface endpointSchema {
  path: string;
  secure: boolean;
  opts: { [key: string]: boolean };
}

export interface endpointsSchema {
  [key: string]: endpointSchema;
}

export interface errorResultSchema {
  error: string;
  result: Array<object>;
}

export interface tradingViewSchema {
  c: Array<Number>;
  h: Array<Number>;
  l: Array<Number>;
  o: Array<Number>;
  s: string;
  t: Array<Number>;
  v: Array<Number>;
}

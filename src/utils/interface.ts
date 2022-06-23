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

export interface errorResultScheme {
  error: string;
  results: Array<object>;
}

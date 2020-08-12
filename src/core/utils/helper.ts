import * as _ from 'lodash';

export function enumToArray(enume) {
  return Object.keys(enume).map(key => enume[key]);
}

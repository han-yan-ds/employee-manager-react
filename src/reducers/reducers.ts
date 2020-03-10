import {Action} from '../types/interfaces';

export function reducer1(defValue = 1, action: Action) {
  switch (action.type) {
    case 'ACTION_LABEL':
      return action.value;
    default:
      return defValue;
  }
}
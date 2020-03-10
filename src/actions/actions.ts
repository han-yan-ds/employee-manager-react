import {Action} from '../types/types';

export function action1(value = 1): Action {
  return {
    type: 'ACTION_LABEL',
    value
  }
}
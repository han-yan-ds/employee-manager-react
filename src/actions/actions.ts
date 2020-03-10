export interface Action {
  type: string;
  value: unknown;
}

export function action1(value = 1) {
  return {
    type: 'ACTION_LABEL',
    value
  }
}
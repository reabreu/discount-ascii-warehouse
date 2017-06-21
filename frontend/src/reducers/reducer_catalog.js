import { NEW_SEARCH, ADD_TO_SEARCH, CLEAR_CATALOG } from '../actions/types';

function parseData(response) {
  const data = response.data.split(/\r?\n/);
  data.splice(-1, 1);
  return data.map(item => JSON.parse(item));
}

export default function (state = [], action) {
  if (action.payload instanceof Promise) return state;

  switch (action.type) {
    case NEW_SEARCH:
      return action.error ? state : [...parseData(action.payload)];
    case ADD_TO_SEARCH:
      return action.error ? state : [...state, ...parseData(action.payload)];
    case CLEAR_CATALOG:
      return [];
    default:
      return state;
  }
}

import { NEW_SEARCH, ADD_TO_SEARCH } from '../actions/types';

function parseData(response) {
  const data = response.data.split(/\r?\n/);
  data.splice(-1, 1);
  return data.map(item => JSON.parse(item));
}

export default function (state = [], action) {
  switch (action.type) {
    case NEW_SEARCH:
      return [...parseData(action.payload)];
    case ADD_TO_SEARCH:
      return [...state, ...parseData(action.payload)];
    default:
      return state;
  }
}

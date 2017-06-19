import { NEW_SEARCH, ADD_TO_SEARCH } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case NEW_SEARCH:
      return [...action.payload];
    case ADD_TO_SEARCH:
      return [...state, ...action.payload];
    default:
      return state;
  }
}

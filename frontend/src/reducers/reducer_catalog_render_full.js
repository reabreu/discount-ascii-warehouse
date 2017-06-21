import { NEW_SEARCH, ADD_TO_SEARCH } from '../actions/types';

export default function (state = true, action) {
  switch (action.type) {
    case NEW_SEARCH:
      return true;
    case ADD_TO_SEARCH:
      return false;
    default:
      return state;
  }
}

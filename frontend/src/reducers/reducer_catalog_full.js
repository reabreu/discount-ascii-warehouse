import { NEW_SEARCH, ADD_TO_SEARCH } from '../actions/types';

export default function (state = false, action) {
  switch (action.type) {
    case NEW_SEARCH:
    case ADD_TO_SEARCH:
      return action.payload.data === '';
    default:
      return state;
  }
}

import { NEW_SEARCH, ADD_TO_SEARCH, SET_FETCH_CATALOG } from '../../actions/types';

export default function (state = false, action) {
  switch (action.type) {
    case NEW_SEARCH:
      return false;
    case ADD_TO_SEARCH:
      return false;
    case SET_FETCH_CATALOG:
      return action.payload;
    default:
      return state;
  }
}

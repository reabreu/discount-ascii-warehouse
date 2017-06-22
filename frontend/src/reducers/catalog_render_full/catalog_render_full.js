import { NEW_SEARCH, ADD_TO_SEARCH, SET_RENDER_FULL } from '../../actions/types';

export default function (state = true, action) {  
  switch (action.type) {
    case NEW_SEARCH:
      return true;
    case ADD_TO_SEARCH:
      return false;
    case SET_RENDER_FULL:
      return action.payload;
    default:
      return state;
  }
}

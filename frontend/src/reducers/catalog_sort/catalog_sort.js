import { SET_SORT_TERM } from '../../actions/types';

export default function (state = false, action) {
  switch (action.type) {
    case SET_SORT_TERM:
      return action.payload;
    default:
      return state;
  }
}

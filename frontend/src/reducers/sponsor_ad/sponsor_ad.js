import { SAVE_AD_ID } from '../../actions/types';

export default function (state = -1, action) {
  switch (action.type) {
    case SAVE_AD_ID:
      return action.payload;
    default:
      return state;
  }
}

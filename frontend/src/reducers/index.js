import { combineReducers } from 'redux';
import sponsorAdReducer from './reducer_sponsor_ad';

const rootReducer = combineReducers({
  lastAdId: sponsorAdReducer,
});

export default rootReducer;

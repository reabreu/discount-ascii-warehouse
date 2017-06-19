import { combineReducers } from 'redux';
import sponsorAdReducer from './reducer_sponsor_ad';
import catalogReducer from './reducer_catalog';

const rootReducer = combineReducers({
  lastAdId: sponsorAdReducer,
  catalog: catalogReducer,
});

export default rootReducer;

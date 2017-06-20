import { combineReducers } from 'redux';
import sponsorAdReducer from './reducer_sponsor_ad';
import catalogReducer from './reducer_catalog';
import setFetchingCatalogReducer from './reducer_set_fetching_catalog';

const rootReducer = combineReducers({
  lastAdId: sponsorAdReducer,
  catalog: catalogReducer,
  fetchCatalog: setFetchingCatalogReducer,
});

export default rootReducer;

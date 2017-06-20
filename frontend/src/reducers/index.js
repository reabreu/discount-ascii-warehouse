import { combineReducers } from 'redux';
import sponsorAdReducer from './reducer_sponsor_ad';
import catalogReducer from './reducer_catalog';
import setFetchingCatalogReducer from './reducer_set_fetching_catalog';
import fullCatalogReducer from './reducer_full_catalog';

const rootReducer = combineReducers({
  lastAdId: sponsorAdReducer,
  catalog: catalogReducer,
  fetchCatalog: setFetchingCatalogReducer,
  fullCatalog: fullCatalogReducer,
});

export default rootReducer;

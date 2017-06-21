import { combineReducers } from 'redux';
import sponsorAdReducer from './reducer_sponsor_ad';
import catalogReducer from './reducer_catalog';
import catalogSetFetchingReducer from './reducer_catalog_set_fetching';
import catalogFullReducer from './reducer_catalog_full';
import catalogSortReducer from './reducer_catalog_sort';
import catalogRenderFull from './reducer_catalog_render_full';

const rootReducer = combineReducers({
  lastAdId: sponsorAdReducer,
  catalog: catalogReducer,
  fetchCatalog: catalogSetFetchingReducer,
  fullCatalog: catalogFullReducer,
  catalogSort: catalogSortReducer,
  renderFullCatalog: catalogRenderFull,
});

export default rootReducer;

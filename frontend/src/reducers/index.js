import { combineReducers } from 'redux';
import sponsorAdReducer from './sponsor_ad/sponsor_ad';
import catalogReducer from './catalog/catalog';
import catalogSetFetchingReducer from './catalog_set_fetching/catalog_set_fetching';
import catalogFullReducer from './catalog_full/catalog_full';
import catalogSortReducer from './catalog_sort/catalog_sort';
import catalogRenderFull from './catalog_render_full/catalog_render_full';

const rootReducer = combineReducers({
  lastAdId: sponsorAdReducer,
  catalog: catalogReducer,
  fetchCatalog: catalogSetFetchingReducer,
  fullCatalog: catalogFullReducer,
  catalogSort: catalogSortReducer,
  renderFullCatalog: catalogRenderFull,
});

export default rootReducer;

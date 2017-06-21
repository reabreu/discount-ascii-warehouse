import SponsorAd from './sponsor_ad_test';
import Catalog from './catalog_test';
import catalogSetFetching from './catalog_set_fetching_test';
import fullCatalog from './catalog_full_test';
import catalogSort from './catalog_sort_test';
import catalogRenderFull from './catalog_render_full_test';

describe('Reducers', () => {
  SponsorAd();
  Catalog();
  catalogSetFetching();
  fullCatalog();
  catalogSort();
  catalogRenderFull();
});

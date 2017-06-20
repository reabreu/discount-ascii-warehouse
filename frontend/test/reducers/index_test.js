import SponsorAd from './sponsor_ad_test';
import Catalog from './catalog_test';
import SetFetchingCatalog from './set_fetching_catalog_test';
import fullCatalog from './full_catalog_test';
import catalogSort from './catalog_sort_test';

describe('Reducers', () => {
  SponsorAd();
  Catalog();
  SetFetchingCatalog();
  fullCatalog();
  catalogSort();
});

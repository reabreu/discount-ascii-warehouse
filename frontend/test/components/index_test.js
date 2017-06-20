import AppTests from './app_test';
import CatalogBrowserTests from './catalog_browser_test';
import HeaderTests from './header_test';
import CatalogItem from './catalog_item_test';
import CatalogList from './catalog_list_test';

describe('Components', () => {
  AppTests();
  CatalogBrowserTests();
  HeaderTests();
  CatalogItem();
  CatalogList();
});

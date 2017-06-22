import AppTests from './app/app_test';
import CatalogBrowserTests from './catalog_browser/catalog_browser_test';
import HeaderTests from './header/header_test';
import CatalogItem from './catalog_item/catalog_item_test';
import CatalogList from './catalog_list/catalog_list_test';

describe('Components', () => {
  AppTests();
  CatalogBrowserTests();
  HeaderTests();
  CatalogItem();
  CatalogList();
});

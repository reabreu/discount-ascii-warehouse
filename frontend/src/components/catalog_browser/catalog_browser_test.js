import { renderComponent, expect } from '../../test/test_helper';
import CatalogBrowser from './catalog_browser';

// Use 'describe' to group together similar tests
export default () => {
  describe('Catalog Browser', () => {
    let component;

    beforeEach(() => {
      component = renderComponent(CatalogBrowser);
    });

    it('shows search form', () => {
      expect(component.find('.catalog-search-form')).to.exist;
    });

    it('shows catalog result list', () => {
      expect(component.find('.search-list')).to.exist;
    });
  });
};

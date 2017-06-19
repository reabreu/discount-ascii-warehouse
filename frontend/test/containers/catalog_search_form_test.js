import { renderComponent, expect } from '../test_helper';
import CatalogSearchForm from '../../src/containers/catalog_search_form';

// Use 'describe' to group together similar tests
export default () => {
  describe('Catalog Search Form', () => {
    let component;

    beforeEach(() => {
      component = renderComponent(CatalogSearchForm);
    });

    it('shows seach by size', () => {
      expect(component.find('#size-search-param')).to.exist;
    });

    it('shows seach by price', () => {
      expect(component.find('#price-search-param')).to.exist;
    });

    it('shows seach by id', () => {
      expect(component.find('#id-search-param')).to.exist;
    });

  });
};

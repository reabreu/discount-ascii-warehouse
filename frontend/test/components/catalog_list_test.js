import { renderComponent, expect } from '../test_helper';
import CatalogList from '../../src/containers/catalog_list';

export default () => {
  describe('Catalog List', () => {
    let component;

    beforeEach(() => {
      component = renderComponent(CatalogList);
    });

    it('renders all catalog items', () => {
      expect(component.find('h1')).to.exist;
    });
  });
};

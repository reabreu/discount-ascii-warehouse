import { renderComponent, expect } from '../test_helper';
import CatalogList from '../../src/components/catalog_list';

export default () => {
  describe('Catalog List', () => {
    let component;
    const catalog = [];

    beforeEach(() => {
      for (let i = 0; i < 10; i++) {
        catalog.push({
          date: 'Wed Jun 07 2017 22:35:39 GMT+0100 (WEST)',
          face: '( .-. )',
          id: i,
          price: 789,
          size: 27,
        });
      }
      component = renderComponent(CatalogList, { catalog, ads: [], loading: false, renderFullCatalog: true });
    });

    it('renders all catalog items', () => {
      expect(component.find('.results > div').length).to.eql(catalog.length);
    });
  });
};

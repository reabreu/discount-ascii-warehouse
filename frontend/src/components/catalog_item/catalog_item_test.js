import { renderComponent, expect } from '../../test/test_helper';
import CatalogItem from './catalog_item';

export default () => {
  describe('Catalog Item', () => {
    let component;

    beforeEach(() => {
      const props = {
        item: {
          date : "Wed Jun 07 2017 03:45:26 GMT+0100 (WEST)",
          face : "( .o.)",
          id : "1-5hvu2gjcqacved3f9bgyd86w29",
          price : 631,
          size: 37
        }
      }
      component = renderComponent(CatalogItem, props);
    });

    it('Shows item face', () => {
      expect(component.find('.font')).to.exist;
    });

    it('Shows item price', () => {
      expect(component.find('.price')).to.exist;
    });

    it('Shows item date', () => {
      expect(component.find('.date')).to.exist;
    });
  });
};

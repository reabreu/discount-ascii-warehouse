import { expect } from '../test_helper';
import catalogSort from '../../src/reducers/reducer_catalog_sort';
import { SET_SORT_TERM } from '../../src/actions/types';

export default () => {
  describe('Catalog Sort Term', () => {
    it('handles action with unknown type', () => {
      expect(catalogSort(undefined, {})).to.eql(false);
    });

    it('handles action of type SET_SORT_TERM ', () => {
      const action = { type: SET_SORT_TERM, payload: 'price' };
      expect(catalogSort(false, action)).to.eql('price');
    });
  });
};

import { expect } from '../test_helper';
import setFetchingCatalogTest from '../../src/reducers/reducer_set_fetching_catalog';
import { NEW_SEARCH, ADD_TO_SEARCH, SET_FETCH_CATALOG } from '../../src/actions/types';

export default () => {
  describe('Set fetching Catalog', () => {
    it('handles action with unknown type', () => {
      expect(setFetchingCatalogTest(undefined, {})).to.eql(false);
    });

    it('handles action of type NEW_SEARCH', () => {
      const action = { type: NEW_SEARCH, payload: {} };
      expect(setFetchingCatalogTest(false, action)).to.eql(false);
    });

    it('handles action of type ADD_TO_SEARCH', () => {
      const action = { type: ADD_TO_SEARCH, payload: {} };
      expect(setFetchingCatalogTest(false, action)).to.eql(false);
    });

    it('handles action of type SET_FETCH_CATALOG', () => {
      const action = { type: SET_FETCH_CATALOG, payload: true };
      expect(setFetchingCatalogTest(false, action)).to.eql(true);
    });
  });
};

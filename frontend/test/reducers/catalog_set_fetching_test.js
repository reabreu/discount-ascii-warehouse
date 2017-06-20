import { expect } from '../test_helper';
import catalogSetFetchingReducer from '../../src/reducers/reducer_catalog_set_fetching';
import { NEW_SEARCH, ADD_TO_SEARCH, SET_FETCH_CATALOG } from '../../src/actions/types';

export default () => {
  describe('Catalog set fetching', () => {
    it('handles action with unknown type', () => {
      expect(catalogSetFetchingReducer(undefined, {})).to.eql(false);
    });

    it('handles action of type NEW_SEARCH', () => {
      const action = { type: NEW_SEARCH, payload: {} };
      expect(catalogSetFetchingReducer(false, action)).to.eql(false);
    });

    it('handles action of type ADD_TO_SEARCH', () => {
      const action = { type: ADD_TO_SEARCH, payload: {} };
      expect(catalogSetFetchingReducer(false, action)).to.eql(false);
    });

    it('handles action of type SET_FETCH_CATALOG', () => {
      const action = { type: SET_FETCH_CATALOG, payload: true };
      expect(catalogSetFetchingReducer(false, action)).to.eql(true);
    });
  });
};

import { expect } from '../test_helper';
import fullCatalog from '../../src/reducers/reducer_full_catalog';
import { NEW_SEARCH, ADD_TO_SEARCH } from '../../src/actions/types';

export default () => {
  describe('Full Catalog', () => {
    it('handles action with unknown type', () => {
      expect(fullCatalog(undefined, {})).to.eql(false);
    });

    it('handles action of type NEW_SEARCH / ADD TO SEARCH with response data', () => {
      const action = { type: NEW_SEARCH, payload: { data: '{"id":"1"}\n{"id":"2"}\n' } };
      expect(fullCatalog(false, action)).to.eql(false);
    });

    it('handles action of type NEW_SEARCH / ADD TO SEARCH without response data', () => {
      const action = { type: ADD_TO_SEARCH, payload: { data: '' } };
      expect(fullCatalog(false, action)).to.eql(true);
    });
  });
};

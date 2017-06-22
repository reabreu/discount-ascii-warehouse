import { expect } from '../../test/test_helper';
import catalogFull from './catalog_full';
import { NEW_SEARCH, ADD_TO_SEARCH } from '../../actions/types';

export default () => {
  describe('Catalog full', () => {
    it('handles action with unknown type', () => {
      expect(catalogFull(undefined, {})).to.eql(false);
    });

    it('handles action of type NEW_SEARCH / ADD TO SEARCH with response data', () => {
      const action = { type: NEW_SEARCH, payload: { data: '{"id":"1"}\n{"id":"2"}\n' } };
      expect(catalogFull(false, action)).to.eql(false);
      const action2 = { type: ADD_TO_SEARCH, payload: { data: '{"id":"1"}\n{"id":"2"}\n' } };
      expect(catalogFull(false, action)).to.eql(false);
    });

    it('handles action of type NEW_SEARCH / ADD TO SEARCH without response data', () => {
      const action = { type: ADD_TO_SEARCH, payload: { data: '' } };
      expect(catalogFull(false, action)).to.eql(true);
      const action2 = { type: NEW_SEARCH, payload: { data: '' } };
      expect(catalogFull(false, action)).to.eql(true);
    });
  });
};

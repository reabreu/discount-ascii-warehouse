import { expect } from '../test_helper';
import catalogRenderFull from '../../src/reducers/reducer_catalog_render_full';
import { NEW_SEARCH, ADD_TO_SEARCH } from '../../src/actions/types';

export default () => {
  describe('Catalog render full', () => {
    it('handles action with unknown type', () => {
      expect(catalogRenderFull(undefined, {})).to.eql(true);
    });

    it('handles action of type NEW_SEARCH with response data', () => {
      const action = { type: NEW_SEARCH, payload: { data: '{"id":"1"}\n{"id":"2"}\n' } };
      expect(catalogRenderFull(false, action)).to.eql(true);
    });

    it('handles action of type ADD TO SEARCH without response data', () => {
      const action = { type: ADD_TO_SEARCH, payload: { data: '' } };
      expect(catalogRenderFull(false, action)).to.eql(false);
    });
  });
};

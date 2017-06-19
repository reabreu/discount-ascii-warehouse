import { expect } from '../test_helper';
import catalogTest from '../../src/reducers/reducer_catalog';
import { NEW_SEARCH, ADD_TO_SEARCH } from '../../src/actions/types';

export default () => {
  describe('Catalog', () => {
    it('handles action with unknown type', () => {
      expect(catalogTest(undefined, {})).to.eql([]);
    });

    it('handles action of type NEW_SEARCH', () => {
      const action = { type: NEW_SEARCH, payload: { data: '{"id":"1"}\n{"id":"2"}\n' } };
      expect(catalogTest([{ id: "3" }, { id: "4" }], action)).to.eql([{ id: "1" }, { id: "2" }]);
    });

    it('handles action of type ADD_TO_SEARCH', () => {
      const action = { type: ADD_TO_SEARCH, payload: { data: '{"id":"3"}\n{"id":"4"}\n' } };
      expect(catalogTest([{ id: "1" }, { id: "2" }], action)).to.eql([{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }]);
    });
  });
};

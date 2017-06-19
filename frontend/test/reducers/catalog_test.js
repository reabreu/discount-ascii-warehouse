import { expect } from '../test_helper';
import catalogTest from '../../src/reducers/reducer_catalog';
import { NEW_SEARCH, ADD_TO_SEARCH } from '../../src/actions/types';

export default () => {
  describe('Catalog', () => {
    it('handles action with unknown type', () => {
      expect(catalogTest(undefined, {})).to.eql([]);
    });

    it('handles action of type NEW_SEARCH', () => {
      const action = { type: NEW_SEARCH, payload: [{ test1: 1 }, { test2: 2 }] };
      expect(catalogTest([{ test3: 1 }, { test4: 2 }], action)).to.eql([{ test1: 1 }, { test2: 2 }]);
    });

    it('handles action of type ADD_TO_SEARCH', () => {
      const action = { type: ADD_TO_SEARCH, payload: [{ test3: 3 }, { test4: 4 }] };
      expect(catalogTest([{ test1: 1 }, { test2: 2 }], action)).to.eql([{ test1: 1 }, { test2: 2 }, { test3: 3 }, { test4: 4 }]);
    });
  });
};

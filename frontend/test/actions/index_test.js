import { expect } from '../test_helper';
import { SAVE_AD_ID, SEARCH_BY_PARAM, NEW_SEARCH, SET_FETCH_CATALOG, SET_SORT_TERM} from '../../src/actions/types';
import { saveAdId, searchByParam, getCatalog, setFetchCatalog, setSortTerm } from '../../src/actions';

describe('Actions', () => {
  describe(SAVE_AD_ID, () => {
    it('has the correct type', () => {
      const action = saveAdId();
      expect(action.type).to.equal(SAVE_AD_ID);
    });

    it('has the correct payload', () => {
      const action = saveAdId(2);
      expect(action.payload).to.equal(2);
    });
  });

  describe(SEARCH_BY_PARAM, () => {
    it('has the correct type', () => {
      const action = searchByParam();
      expect(action.type).to.equal(SEARCH_BY_PARAM);
    });

    it('has the correct payload', () => {
      const action = saveAdId('size');
      expect(action.payload).to.equal('size');
    });
  });

  describe(NEW_SEARCH, () => {
    it('has the correct type', () => {
      const action = getCatalog();

      action.payload.catch(() => {
        // Promise rejected, do something;
      });

      expect(action.type).to.equal(NEW_SEARCH);
    });

    it('returns a promise', () => {
      const action = getCatalog();

      action.payload.catch(() => {
        // Promise rejected, do something;
      });

      expect(action.payload).to.be.a('promise');
    });
  });

  describe(SET_FETCH_CATALOG, () => {
    it('has the correct type', () => {
      const action = setFetchCatalog();
      expect(action.type).to.equal(SET_FETCH_CATALOG);
    });

    it('return true', () => {
      const action = setFetchCatalog();
      expect(action.payload).to.equal(true);
    });
  });

  describe(SET_SORT_TERM, () => {
    it('has the correct type', () => {
      const action = setSortTerm();
      expect(action.type).to.equal(SET_SORT_TERM);
    });

    it('return given param', () => {
      const action = setSortTerm('price');
      expect(action.payload).to.equal('price');
    });
  });
});

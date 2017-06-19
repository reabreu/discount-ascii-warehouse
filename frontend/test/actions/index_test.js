import { expect } from '../test_helper';
import { SAVE_AD_ID, SEARCH_BY_PARAM, NEW_SEARCH } from '../../src/actions/types';
import { saveAdId, searchByParam, getCatalog } from '../../src/actions';

describe('Actions', () => {
  describe('Save Ad Id', () => {
    it('has the correct type', () => {
      const action = saveAdId();
      expect(action.type).to.equal(SAVE_AD_ID);
    });

    it('has the correct payload', () => {
      const action = saveAdId(2);
      expect(action.payload).to.equal(2);
    });
  });

  describe('Search by type', () => {
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
});

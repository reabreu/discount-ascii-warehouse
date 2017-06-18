import { expect } from '../test_helper';
import { SAVE_AD_ID } from '../../src/actions/types';
import { saveAdId } from '../../src/actions';

describe('Actions', () => {
  describe('saveAdId', () => {
    it('has the correct type', () => {
      const action = saveAdId();
      expect(action.type).to.equal(SAVE_AD_ID);
    });

    it('has the correct payload', () => {
      const action = saveAdId(2);
      expect(action.payload).to.equal(2);
    });
  });
});

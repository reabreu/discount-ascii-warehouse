import { expect } from '../../test/test_helper';
import sponsorAdReducer from './sponsor_ad';
import { SAVE_AD_ID } from '../../actions/types';

export default () => {
  describe('Sponsor Ad Id', () => {
    it('handles action with unknown type', () => {
      expect(sponsorAdReducer(undefined, {})).to.eql(-1);
    });

    it('handles action of type SAVE_AD_ID', () => {
      const action = { type: SAVE_AD_ID, payload: 30 };
      expect(sponsorAdReducer(33, action)).to.eql(30);
    });
  });
};

import { expect } from '../test_helper';
import sponsorAdReducer from '../../src/reducers/reducer_sponsor_ad';
import { SAVE_AD_ID } from '../../src/actions/types';

describe('Reducer - Sponsor Ad Id', () => {
  it('handles action with unknown type', () => {
    expect(sponsorAdReducer(undefined, {})).to.eql(-1);
  });

  it('handles action of type SAVE_AD_ID', () => {
    const action = { type: SAVE_AD_ID, payload: 30 };
    expect(sponsorAdReducer(33, action)).to.eql(30);
  });
});

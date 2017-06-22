import { renderComponent, expect } from '../../test/test_helper';
import SponsorBlockTests from './sponsor_block';

// Use 'describe' to group together similar tests
export default () => {
  describe('Sponsor Block', () => {
    let component;

    beforeEach(() => {
      component = renderComponent(SponsorBlockTests);
    });

    it('shows sponsor image', () => {
      expect(component.find('img')).to.exist;
    });
  });
};

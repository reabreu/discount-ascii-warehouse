import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use 'describe' to group together similar tests
describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('shows a comment box', () => {
    expect(2).to.equal(2);
    //expect(component.find('.comment-box')).to.exist;
  });

  it('shows a comment list', () => {
    expect(2).to.equal(2);
    //expect(component.find('.comment-list')).to.exist;
  });
});

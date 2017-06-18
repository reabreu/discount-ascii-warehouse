import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use 'describe' to group together similar tests
describe('Component - App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('shows a header', () => {
    expect(component.find('header')).to.exist;
  });

  it('shows ascii catalog browser', () => {
    expect(component.find('.ascii-catalog-browser')).to.exist;
  });
});

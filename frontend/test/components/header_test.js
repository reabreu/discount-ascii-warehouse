import { renderComponent, expect } from '../test_helper';
import Header from '../../src/components/header';

// Use 'describe' to group together similar tests
describe('Component - Header', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Header);
  });

  it('has main heading', () => {
    expect(component.find('h1')).to.exist;
  });

  it('has project description', () => {
    expect(component.find('p')).to.exist;
  });

  it('has sponsor add', () => {
    expect(component.find('.sponsor-block')).to.exist;
  });
});

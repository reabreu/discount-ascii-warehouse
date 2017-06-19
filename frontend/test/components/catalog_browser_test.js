import { renderComponent, expect } from '../test_helper';
import CatalogBrowser from '../../src/components/catalog_browser';

// Use 'describe' to group together similar tests
describe('Component - Catalog Browser', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CatalogBrowser);
  });

  it('shows search form', () => {
    expect(component.find('.search-form')).to.exist;
  });

  it('shows catalog result list', () => {
    expect(component.find('.search-list')).to.exist;
  });
});

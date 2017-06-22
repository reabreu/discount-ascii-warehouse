import { renderComponent, expect } from '../../test/test_helper';
import App from './app';
console.log('beforeEach');
process.on('unhandledRejection', (err) => { throw err; })

// Use 'describe' to group together similar tests
export default () => {
  describe('App', () => {
    let component;

    beforeEach(() => {
      component = renderComponent(App);
    });

    it('shows a header', () => {
      expect(component.find('header')).to.exist;
    });

    it('shows ascii catalog browser', () => {
      expect(component.find('.catalog-browser')).to.exist;
    });
  });
};

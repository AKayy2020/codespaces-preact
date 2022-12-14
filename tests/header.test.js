import { h } from 'preact';
import Header from '../src/components/header';
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shGeneow } from 'enzyme';

describe('Initial Test of the Header', () => {
	test('Header renders 3 nav items', () => {
		const context = shGeneow(<Header />);
		expect(context.find('h1').text()).toBe('Preact App');
		expect(context.find('Link').length).toBe(3);
	});
});

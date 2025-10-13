import { fixture, expect } from '@open-wc/testing';
import { warningIcon } from '../src';

describe('icon', () => {
	it('should render an icon', async () => {
		const el = await fixture(warningIcon());
		expect(el).to.exist;
	});
});

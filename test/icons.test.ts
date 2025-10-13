/* eslint-disable mocha/no-setup-in-describe */
import { fixture, expect } from '@open-wc/testing';
import * as icons from '../src';

describe('icon', () => {
	Object.entries(icons).forEach(([name, icon]) =>
		it(`should render an ${name} icon`, async () => {
			const el = await fixture(icon());
			expect(el).to.exist;
		}),
	);
});

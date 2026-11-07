/* eslint-disable mocha/no-setup-in-describe */
import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit-html';
import * as legacy from '../src';
import * as untitled from '../src/untitled';
import { iconSamples } from '../stories/helpers';

const collections = { legacy, untitled };

describe('token-sized icon galleries', () => {
	let rootSize: string;
	let colorScheme: string;
	let links: HTMLLinkElement[];

	before(async () => {
		links = [];
		await Promise.all(
			[
				'/node_modules/@neovici/cosmoz-tokens/src/index.css',
				'/stories/icons.css',
			].map(async (href) => {
				const link = document.createElement('link');
				link.rel = 'stylesheet';
				link.href = href;
				links.push(link);
				const loaded = new Promise((resolve, reject) => {
					link.onload = resolve;
					link.onerror = reject;
				});
				document.head.append(link);
				await loaded;
			}),
		);
	});

	beforeEach(() => {
		rootSize = document.documentElement.style.fontSize;
		colorScheme = document.documentElement.style.colorScheme;
	});

	afterEach(() => {
		document.documentElement.style.fontSize = rootSize;
		document.documentElement.style.colorScheme = colorScheme;
	});

	after(() => links.forEach((link) => link.remove()));

	for (const [collection, icons] of Object.entries(collections)) {
		for (const scheme of ['light', 'dark']) {

			it(`renders every ${collection} icon at all token sizes in ${scheme} mode`, async () => {
				document.documentElement.style.colorScheme = scheme;
				const entries = Object.entries(icons);
				const el = await fixture(
					html`<div style="color-scheme: ${scheme}">
						${entries.map(
							([name, icon]) =>
								html`<div data-icon=${name}>${iconSamples(icon)}</div>`,
						)}
					</div>`,
				);
				for (const root of [16, 20]) {
					document.documentElement.style.fontSize = `${root}px`;
					for (const cell of el.querySelectorAll<HTMLElement>('[data-icon]')) {
						const icons = cell.querySelectorAll('svg');
						expect(icons.length, cell.dataset.icon).to.equal(5);
						for (const [index, icon] of Array.from(icons).entries()) {
							const expected = ([14, 16, 18, 20, 24][index] * root) / 16;
							const rect = icon.getBoundingClientRect();
							expect(rect.width, cell.dataset.icon).to.be.closeTo(
								expected,
								0.02,
							);
							expect(rect.height, cell.dataset.icon).to.be.closeTo(
								expected,
								0.02,
							);
							expect(
								icon.viewBox.baseVal.width,
								cell.dataset.icon,
							).to.be.greaterThan(0);
							expect(icon.getBBox().width, cell.dataset.icon).to.be.greaterThan(
								0,
							);
						}
					}
				}
			});
		}
	}

	it('inherits token overrides into the rendered artwork', async () => {
		const el = await fixture(
			html`<div style="--cz-icon-size-lg: 30px">
				${iconSamples(untitled.plusCircleIcon)}
			</div>`,
		);
		expect(
			el.querySelectorAll('svg')[3].getBoundingClientRect().width,
		).to.equal(30);
	});
});

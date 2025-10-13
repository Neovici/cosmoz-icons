import { html } from 'lit-html';
import * as icons from '../src';

export default {
	title: 'Cosmoz Icons',
};

export const Icons = () => {
	return html`<ul>
		${Object.entries(icons).map(([k, value]) => html`<li>${[k, value()]}</li>`)}
	</ul>`;
};

Icons.parameters = {
	docs: {
		description: {
			story: 'A collection of various icons used throughout Cosmoz.',
		},
	},
};

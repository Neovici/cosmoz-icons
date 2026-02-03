import { html } from 'lit-html';
import * as icons from '../src';
import { filterIcons, copyImport } from './helpers';
import './icons.css';

export default {
	title: 'Cosmoz Icons',
};

const entries = Object.entries(icons);

export const Icons = () => html`
	<div class="icon-gallery">
		<input
			class="icon-gallery-search"
			type="text"
			placeholder="Search icons..."
			@input=${filterIcons}
		/>
		<div class="icon-gallery-count">${entries.length} icons</div>
		<div class="icon-gallery-grid" @click=${copyImport('@neovici/cosmoz-icons')}>
			${entries.map(
				([k, value]) => html`
					<div class="icon-gallery-cell" data-icon=${k}>
						${value()}
						<span class="icon-gallery-label" title=${k}>${k}</span>
					</div>
				`,
			)}
		</div>
		<div class="icon-gallery-toast">Copied to clipboard</div>
	</div>
`;

Icons.parameters = {
	docs: {
		description: {
			story: 'A collection of various icons used throughout Cosmoz. Click an icon to copy its import statement.',
		},
	},
};

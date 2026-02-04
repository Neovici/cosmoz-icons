import { html } from 'lit-html';
import * as icons from '../src/untitled';
import { filterIcons, copyImport } from './helpers';
import './icons.css';

export default {
	title: 'Untitled UI Icons',
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
		<div class="icon-gallery-note">
			Browse icons by category on
			<a href="https://untitledui.com/free-icons" target="_blank" rel="noopener">untitledui.com</a>
		</div>
		<div class="icon-gallery-count">${entries.length} icons</div>
		<div class="icon-gallery-grid" @click=${copyImport('@neovici/cosmoz-icons/untitled')}>
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
			story: 'Icons from the Untitled UI icon set (MIT licensed). Click an icon to copy its import statement.',
		},
	},
};

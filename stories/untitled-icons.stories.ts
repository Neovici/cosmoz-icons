import { html } from 'lit-html';
import * as icons from '../src/untitled';
import './icons.css';

export default {
	title: 'Untitled UI Icons',
};

const filterIcons = (e: InputEvent) => {
	const input = e.target as HTMLInputElement,
		query = input.value.toLowerCase(),
		gallery = input.closest('.icon-gallery')!,
		cells = gallery.querySelectorAll<HTMLElement>('[data-icon]'),
		count = gallery.querySelector('.icon-gallery-count')!;
	let visible = 0;
	for (const cell of cells) {
		const match = cell.dataset.icon!.toLowerCase().includes(query);
		cell.hidden = !match;
		if (match) visible++;
	}
	count.textContent = `${visible} icon${visible !== 1 ? 's' : ''}`;
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
		<div class="icon-gallery-grid">
			${entries.map(
				([k, value]) => html`
					<div class="icon-gallery-cell" data-icon=${k}>
						${value()}
						<span class="icon-gallery-label" title=${k}>${k}</span>
					</div>
				`,
			)}
		</div>
	</div>
`;

Icons.parameters = {
	docs: {
		description: {
			story: 'Icons from the Untitled UI icon set (MIT licensed).',
		},
	},
};

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const uploadIcon = ({
	slot,
	title,
	className,
	width = '24',
	height = '24',
	styles,
}: {
	slot?: string;
	title?: string;
	className?: string;
	width?: string;
	height?: string;
	styles?: string;
} = {}) => html`
	<svg
		slot=${ifDefined(slot)}
		class=${`upload-icon ${className ?? ''}`}
		viewBox="0 0 48 48"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		width=${width}
		height=${height}
		style=${ifDefined(styles)}
	>
		${when(title, () => svg`<title>${title}</title>`)}
		<path
			fill="transparent"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-width="1.5"
			d="M21 11.5h4a4 4 0 0 1 4 4V25a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4v-9.5a4 4 0 0 1 4-4h2.5"
		/>
		<path
			fill="currentColor"
			d="M14.25 19a.75.75 0 0 0 1.5 0h-1.5Zm0-17.5V19h1.5V1.5h-1.5Z"
		/>
		<path
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="1.5"
			d="M10 5.5 15 1l5 4.5"
		/>
	</svg>
`;

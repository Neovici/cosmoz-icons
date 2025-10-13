import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const checkIcon = ({
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
		class=${`check-icon ${className ?? ''}`}
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		width=${width}
		height=${height}
		style=${ifDefined(styles)}
	>
		${when(title, () => svg`<title>${title}</title>`)}
		<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
	</svg>
`;

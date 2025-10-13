import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const eyeIcon = ({
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
		class=${`eye-icon ${className ?? ''}`}
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		width=${width}
		height=${height}
		style=${ifDefined(styles)}
	>
		${when(title, () => svg`<title>${title}</title>`)}
		<path
			d="M20.1 12c0 1.3-2.6 6-8 6s-8-4.7-8-6 2.6-6 8-6c5.5 0 8 4.7 8 6z"
			style="stroke:currentColor"
		/>
		<circle cx="12.1" cy="12" r="2.5" style="stroke:currentColor" />
	</svg>
`;

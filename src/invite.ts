import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const inviteIcon = ({
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
		class=${`invite-icon ${className ?? ''}`}
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
			stroke-width="1.5"
			d="M22 7.073c0 3.69-2.686 6.68-6 6.68-3.313 0-6-2.99-6-6.68C10 3.383 12.687 1 16 1c3.314 0 6 2.384 6 6.073Z"
		/>
		<path
			fill="transparent"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-width="1.5"
			d="M26 23c0-5.74-3.74-9.246-10-9.246S6 17.26 6 23"
		/>
		<path
			stroke="currentColor"
			stroke-linecap="round"
			stroke-width="1.5"
			d="M1 10.161h6.323M4.161 13.323V7"
		/>
	</svg>
`;

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const addIcon = ({
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
		class=${`add-icon ${className ?? ''}`}
		viewBox="0 0 48 48"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		width=${width}
		height=${height}
		style=${ifDefined(styles)}
	>
		${when(title, () => svg`<title>${title}</title>`)}
		<circle cx="22" cy="22" r="22" fill="#1D68FA" />
		<rect
			width="1.571"
			height="25.143"
			x="21.214"
			y="9.429"
			fill="#fff"
			rx=".786"
		/>
		<rect
			width="1.571"
			height="25.143"
			x="34.572"
			y="21.214"
			fill="#fff"
			rx=".786"
			transform="rotate(90 34.572 21.214)"
		/>
	</svg>
`;

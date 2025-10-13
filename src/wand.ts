/* eslint-disable max-len */
import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const wandIcon = ({
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
		class=${`wand-icon ${className ?? ''}`}
		viewBox="0 0 48 48"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		width=${width}
		height=${height}
		style=${ifDefined(styles)}
	>
		${when(title, () => svg`<title>${title}</title>`)}
		<path
			fill="currentColor"
			d="M25.87 2.423c.13.284.352.508.644.635l1.215.527a.453.453 0 0 1 0 .83l-1.205.527a1.22 1.22 0 0 0-.643.635l-.954 2.167c-.17.341-.683.341-.854 0l-.954-2.167a1.256 1.256 0 0 0-.643-.635l-1.205-.527a.453.453 0 0 1 0-.83l1.205-.527a1.22 1.22 0 0 0 .643-.635l.954-2.167c.17-.341.683-.341.854 0l.943 2.167Zm-11.887.742a.89.89 0 0 0 .458.438l.864.36c.26.117.26.457 0 .574l-.864.36a.848.848 0 0 0-.458.438l-.676 1.49c-.125.233-.49.233-.614 0l-.676-1.49a.885.885 0 0 0-.458-.438l-.864-.36a.309.309 0 0 1 0-.574l.864-.36a.848.848 0 0 0 .458-.438l.676-1.49c.125-.233.49-.233.614 0l.676 1.49ZM2.001 24 .338 25.627a1.146 1.146 0 0 0 0 1.625l.41.41c.44.452 1.17.452 1.61-.01L4 26.007l-.003-.003L18 12l1.674-1.667c.435-.445.435-1.24 0-1.675l-.33-.33C18.9 7.89 18 8 17.5 8.5L2 24Zm21.949-9.702a.948.948 0 0 1-.46-.48l-.685-1.622c-.128-.26-.492-.26-.61 0l-.685 1.623a.947.947 0 0 1-.46.48l-.857.391c-.257.13-.257.5 0 .62l.856.392c.206.1.37.27.46.48l.686 1.622c.128.261.492.261.61 0l.685-1.622c.09-.21.254-.38.46-.48l.857-.392c.257-.13.257-.5 0-.62l-.857-.392ZM10 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm18-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM17 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
		/>
	</svg>
`;

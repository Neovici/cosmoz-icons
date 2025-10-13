/* eslint-disable max-len */
import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const googleIcon = ({
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
} = {}) =>
	html`<svg
		slot=${ifDefined(slot)}
		class=${`google-icon ${className ?? ''}`}
		viewBox=${`0 0 ${width} ${height}`}
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		width=${width}
		height=${height}
		style=${ifDefined(styles)}
	>
		${when(title, () => svg`<title>${title}</title>`)}
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M19.9996 11.5972C19.9996 10.8784 19.9302 10.1873 19.8012 9.5238H9.52344V13.4448H15.3965C15.1435 14.7119 14.3746 15.7855 13.2189 16.5042V19.0476H16.7457C18.8092 17.2829 19.9996 14.6843 19.9996 11.5972Z"
			fill="#4285F4"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M10.2548 20.9525C13.0652 20.9525 15.4214 20.005 17.1436 18.3888L13.7797 15.7337C12.8476 16.3686 11.6553 16.7438 10.2548 16.7438C7.54381 16.7438 5.24914 14.8823 4.43062 12.3811H0.953125V15.1228C2.66585 18.5812 6.18593 20.9525 10.2548 20.9525Z"
			fill="#34A853"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M4.7619 12.4905C4.54568 11.8543 4.42282 11.1748 4.42282 10.4759C4.42282 9.77703 4.54568 9.09745 4.7619 8.46124V5.71399H1.14993C0.417711 7.14545 0 8.76489 0 10.4759C0 12.1869 0.417711 13.8063 1.14993 15.2378L4.7619 12.4905Z"
			fill="#FBBC05"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M10.2116 4.20875C11.7326 4.20875 13.0983 4.74266 14.1721 5.79125L17.1436 2.75613C15.3494 1.04858 13.0042 0 10.2116 0C6.16158 0 2.65788 2.37133 0.953125 5.82973L4.41444 8.57143C5.22914 6.07023 7.51314 4.20875 10.2116 4.20875Z"
			fill="#EA4335"
		/>
	</svg>`;

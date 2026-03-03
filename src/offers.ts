/* eslint-disable max-len */
import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const offersIcon = ({
  slot,
  title,
  className,
  width = '20',
  height = '20',
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
    class=${`offers-icon ${className ?? ''}`}
    viewBox="0 0 20 20"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${width}
    height=${height}
    fill="none"
    style=${ifDefined(styles)}
  >
    ${when(title, () => svg`<title>${title}</title>`)}
    <path
      stroke="currentColor"
      d="M3.571 10.935a1.55 1.55 0 0 1 0-2.404 1.547 1.547 0 0 0 .524-1.602A1.549 1.549 0 0 1 5.51 4.981a1.534 1.534 0 0 0 1.365-.99 1.546 1.546 0 0 1 2.284-.741 1.527 1.527
				0 0 0 1.682 0 1.544 1.544 0 0 1 2.284.742c.218.573.752.96 1.365.989a1.55 1.55 0 0 1 1.415 1.948c-.159.594.05 1.217.524 1.602a1.55 1.55 0 0 1 0 2.404 1.547 1.547 0 0 0-.524 1.602c.257.95-.436 1.89-1.415 1.949a1.534 1.534 0 0 0-1.365.989 1.546 1.546 0 0 1-2.284.741 1.527 1.527 0 0 0-1.682 0 1.544 1.544 0 0 1-2.284-.741 1.534 1.534 0 0 0-1.365-.99 1.55 1.55 0 0 1-1.415-1.948 1.547 1.547 0 0 0-.524-1.602ZM12.63 7.097 7.36 12.37"
    />
    <path
      stroke="currentColor"
      d="M8.24 8.472a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75ZM11.75 13.744a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75Z"
    />
  </svg>
`;

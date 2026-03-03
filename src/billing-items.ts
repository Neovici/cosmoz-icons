/* eslint-disable max-len */
import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const billingItemsIcon = ({
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
    class=${`billing-items-icon ${className ?? ''}`}
    viewBox="0 0 20 20"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${width}
    height=${height}
    fill="none"
    style=${ifDefined(styles)}
  >
    ${when(title, () => svg`<title>${title}</title>`)}
    <path d="M7 11.5H14" stroke="currentColor" />
    <path d="M7 8.5H14" stroke="currentColor" />
    <path d="M7 14.5H14" stroke="currentColor" />
    <path
      d="M5 17.5H16C16.2761 17.5 16.5 17.2761 16.5 17V4C16.5 3.72386 16.2761 3.5 16 3.5H14C13.7239 3.5 13.5 3.72386 13.5 4V5C13.5 5.27614 13.2761 5.5 13 5.5H8C7.72386 5.5 7.5 5.27614 7.5 5V4C7.5 3.72386 7.27614 3.5 7 3.5L5 3.5C4.72386 3.5 4.5 3.72386 4.5 4V17C4.5 17.2761 4.72386 17.5 5 17.5Z"
      stroke="currentColor"
    />
    <path d="M7.5 2.5H13.5V5.5H7.5V2.5Z" stroke="currentColor" />
  </svg>
`;

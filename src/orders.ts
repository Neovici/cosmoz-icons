import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const ordersIcon = ({
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
    class=${`orders-icon ${className ?? ''}`}
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
      d="M4.5 4C4.5 3.72386 4.72386 3.5 5 3.5H16C16.2761 3.5 16.5 3.72386 16.5 4V16C16.5 16.2761 16.2761 16.5 16 16.5H5C4.72386 16.5 4.5 16.2761 4.5 16V4Z"
      stroke="currentColor"
    />
    <path
      d="M7.5 4C7.5 3.72386 7.72386 3.5 8 3.5H13C13.2761 3.5 13.5 3.72386 13.5 4V6C13.5 6.27614 13.2761 6.5 13 6.5H8C7.72386 6.5 7.5 6.27614 7.5 6V4Z"
      stroke="currentColor"
    />
    <line x1="11" y1="9.5" x2="15" y2="9.5" stroke="currentColor" />
    <line x1="11" y1="13.5" x2="15" y2="13.5" stroke="currentColor" />
    <path d="M6.5 9L7.5 10L9 8.5" stroke="currentColor" />
    <path d="M6.5 13L7.5 14L9 12.5" stroke="currentColor" />
  </svg>
`;

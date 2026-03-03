import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const purchaseIcon = ({
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
    class=${`purchase-icon ${className ?? ''}`}
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
      d="M6 16.5C6.55228 16.5 7 16.0523 7 15.5C7 14.9477 6.55228 14.5 6 14.5C5.44772 14.5 5 14.9477 5 15.5C5 16.0523 5.44772 16.5 6 16.5Z"
      stroke="currentColor"
    />
    <path
      d="M14 16.5C14.5523 16.5 15 16.0523 15 15.5C15 14.9477 14.5523 14.5 14 14.5C13.4477 14.5 13 14.9477 13 15.5C13 16.0523 13.4477 16.5 14 16.5Z"
      stroke="currentColor"
    />
    <path
      d="M2 3H4L4.4 5M5 8H16L17 5H4.4M5 8L4.4 5M5 8L5.8 11.8C5.9 12.4 6.4 12.8 7 12.8H14C14.6 12.8 15.1 12.4 15.2 11.8L16 8"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
`;

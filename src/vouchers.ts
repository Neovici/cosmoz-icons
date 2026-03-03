import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const vouchersIcon = ({
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
    class=${`vouchers-icon ${className ?? ''}`}
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
      d="M5 2.5H15C15.2761 2.5 15.5 2.72386 15.5 3V16L13.5 14.5L11.5 16L10 14.5L8.5 16L6.5 14.5L4.5 16V3C4.5 2.72386 4.72386 2.5 5 2.5Z"
      stroke="currentColor"
    />
    <path d="M7 5.5H13" stroke="currentColor" stroke-linecap="round" />
    <path d="M7 8H13" stroke="currentColor" stroke-linecap="round" />
    <path d="M7 10.5H10" stroke="currentColor" stroke-linecap="round" />
  </svg>
`;

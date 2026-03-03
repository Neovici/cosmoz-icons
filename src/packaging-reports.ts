/* eslint-disable max-len */
import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const packagingReportsIcon = ({
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
    class=${`packaging-reports-icon ${className ?? ''}`}
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
      d="M15.5 10.5V3.5C15.5 2.94772 15.0523 2.5 14.5 2.5H4.5C3.94772 2.5 3.5 2.94772 3.5 3.5V15.5C3.5 16.0523 3.94772 16.5 4.5 16.5H9"
      stroke="currentColor"
    />
    <path d="M9 6.5H13" stroke="currentColor" />
    <path d="M7.5 8.86766L6.06066 10.307L5.25364 9.5" stroke="currentColor" />
    <path d="M7.5 4.86766L6.06066 6.307L5.25364 5.5" stroke="currentColor" />
    <path d="M7.5 12.8677L6.06066 14.307L5.25364 13.5" stroke="currentColor" />
    <path
      d="M17 10.5C17.2761 10.5 17.5 10.7239 17.5 11L17.5 17C17.5 17.2761 17.2761 17.5 17 17.5L9.00001 17.5C8.72386 17.5 8.50001 17.2761 8.50001 17L8.50001 11C8.50001 10.7239 8.72386 10.5 9.00001 10.5L17 10.5Z"
      stroke="currentColor"
      stroke-linejoin="round"
    />
    <path
      d="M14.5 10.5H11.5V12.5H14.5V10.5Z"
      stroke="currentColor"
      stroke-linejoin="round"
    />
  </svg>
`;

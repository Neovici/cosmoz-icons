/* eslint-disable max-len */
import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const accountStatusIcon = ({
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
    class=${`account-status-icon ${className ?? ''}`}
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
      d="M9.0455 10.613C8.90842 10.6327 8.76809 10.6429 8.625 10.6429C6.8498 10.6429 5.5 9.08042 5.5 7.07143C5.5 5.06243 6.85001 3.5 8.62521 3.5C10.4004 3.5 11.75 5.06243 11.75 7.07143C11.75 7.58267 11.6626 8.06499 11.503 8.5"
      stroke="currentColor"
    />
    <path
      d="M13 16.5C13 16.5 11.9424 16.5 8.58928 16.5C6.27852 16.5 4.73568 16.5 3.99976 16.5C3.72361 16.5 3.49801 16.2754 3.51719 15.9999C3.71637 13.1396 5.63368 11.1429 8.58928 11.1429"
      stroke="currentColor"
    />
    <path
      d="M8.5 12.5C8.5 14.7085 10.2915 16.5 12.5 16.5C13.8746 16.5 15.0915 15.8014 15.8127 14.7423C16.2521 14.1 16.5 13.3338 16.5 12.5C16.5 10.2915 14.7085 8.5 12.5 8.5C10.2915 8.5 8.5 10.2915 8.5 12.5Z"
      stroke="currentColor"
    />
    <path
      d="M10.5 12L12 13.5L14.5396 10.9605"
      stroke="currentColor"
      stroke-linejoin="round"
    />
  </svg>
`;

/* eslint-disable max-len */
import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const marketingIcon = ({
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
    class=${`marketing-icon ${className ?? ''}`}
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
      d="M17 3.5H15C14.7239 3.5 14.5 3.72386 14.5 4V15C14.5 15.2761 14.7239 15.5 15 15.5H17C17.2761 15.5 17.5 15.2761 17.5 15V4C17.5 3.72386 17.2761 3.5 17 3.5Z"
      stroke="currentColor"
      stroke-miterlimit="10"
    />
    <path
      d="M5 6.5H4C3.72386 6.5 3.5 6.72386 3.5 7V12C3.5 12.2761 3.72386 12.5 4 12.5H5C5.27614 12.5 5.5 12.2761 5.5 12V7C5.5 6.72386 5.27614 6.5 5 6.5Z"
      stroke="currentColor"
      stroke-miterlimit="10"
    />
    <path
      d="M5.5 12.5L14.5 14.5V4.5L5.5 6.5V12.5Z"
      stroke="currentColor"
      stroke-miterlimit="10"
    />
    <path
      d="M12.5 14.1334C12.5 15.5 11.2422 16.5221 10.0278 16.5221C8.63174 16.5221 7.5 15.1691 7.5 13.5C7.5 13.3273 7.51212 13.1579 7.5354 12.9931"
      stroke="currentColor"
    />
  </svg>
`;

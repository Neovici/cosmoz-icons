/* eslint-disable max-len */
import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const pricingIcon = ({
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
    class=${`pricing-icon ${className ?? ''}`}
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
      d="M16.5 13.4252C16.5 14.5093 13.8138 15.5 10.5 15.5C7.18623 15.5 4.50052 14.5093 4.50052 13.4252L4.50052 11.0853C5 11.5 7.18676 12.5748 10.5005 12.5748C13.8143 12.5748 16 11.5 16.5005 11.0853L16.5 13.4252Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.4995 8.42515C16.4995 9.50929 13.8132 10.5 10.4995 10.5C7.18571 10.5 4.5 9.50929 4.5 8.42515V5.5C4.5 6.58414 7.18624 7.57485 10.5 7.57485C13.8138 7.57485 16.5 6.58414 16.5 5.5L16.4995 8.42515Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.5 5.5C4.5 4.45497 7.18636 3.5 10.4997 3.5C13.8131 3.5 16.5 4.45497 16.5 5.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
`;

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const priceDifferencesIcon = ({
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
    class=${`price-differences-icon ${className ?? ''}`}
    viewBox="0 0 20 20"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${width}
    height=${height}
    fill="none"
    style=${ifDefined(styles)}
  >
    ${when(title, () => svg`<title>${title}</title>`)}
    <path d="M13.5 15L13.5 5" stroke="currentColor" />
    <path d="M6.5 15L6.5 5" stroke="currentColor" />
    <path
      d="M10.7123 7.82843L13.5407 5L16.3692 7.82843"
      stroke="currentColor"
      stroke-linejoin="round"
    />
    <path
      d="M9.36917 12.1716L6.54074 15L3.71232 12.1716"
      stroke="currentColor"
      stroke-linejoin="round"
    />
  </svg>
`;

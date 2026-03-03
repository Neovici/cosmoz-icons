import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const reconciliationIcon = ({
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
    class=${`reconciliation-icon ${className ?? ''}`}
    viewBox="0 0 20 20"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${width}
    height=${height}
    fill="none"
    style=${ifDefined(styles)}
  >
    ${when(title, () => svg`<title>${title}</title>`)}
    <circle cx="5.5" cy="14.5" r="2" stroke="currentColor" />
    <circle cx="5.5" cy="5.5" r="2" stroke="currentColor" />
    <circle cx="14.5" cy="14.5" r="2" stroke="currentColor" />
    <circle cx="14.5" cy="5.5" r="2" stroke="currentColor" />
    <path d="M13.5 7L13.5 13" stroke="currentColor" />
    <path d="M6.5 7L6.5 13" stroke="currentColor" />
    <path d="M13 6.5L7 6.5" stroke="currentColor" />
    <path d="M13 13.5L7 13.5" stroke="currentColor" />
  </svg>
`;

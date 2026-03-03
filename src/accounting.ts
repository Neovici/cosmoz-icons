import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const accountingIcon = ({
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
    class=${`accounting-icon ${className ?? ''}`}
    viewBox="0 0 20 20"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${width}
    height=${height}
    fill="none"
    style=${ifDefined(styles)}
  >
    ${when(title, () => svg`<title>${title}</title>`)}
    <rect x="4" y="2" width="12" height="16" rx="1" stroke="currentColor" />
    <rect x="6" y="4" width="8" height="3" rx="0.5" stroke="currentColor" />
    <circle cx="7.5" cy="10" r="0.75" fill="currentColor" />
    <circle cx="10" cy="10" r="0.75" fill="currentColor" />
    <circle cx="12.5" cy="10" r="0.75" fill="currentColor" />
    <circle cx="7.5" cy="13" r="0.75" fill="currentColor" />
    <circle cx="10" cy="13" r="0.75" fill="currentColor" />
    <circle cx="12.5" cy="13" r="0.75" fill="currentColor" />
    <circle cx="7.5" cy="16" r="0.75" fill="currentColor" />
    <circle cx="10" cy="16" r="0.75" fill="currentColor" />
    <circle cx="12.5" cy="16" r="0.75" fill="currentColor" />
  </svg>
`;

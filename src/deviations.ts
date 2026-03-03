import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const deviationsIcon = ({
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
    class=${`deviations-icon ${className ?? ''}`}
    viewBox="0 0 20 20"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${width}
    height=${height}
    fill="none"
    style=${ifDefined(styles)}
  >
    ${when(title, () => svg`<title>${title}</title>`)}
    <circle cx="6" cy="6" r="2.5" stroke="currentColor" />
    <circle cx="6" cy="14" r="2.5" stroke="currentColor" />
    <circle cx="14" cy="14" r="2.5" stroke="currentColor" />
    <mask id="path-4-inside-1_253_1697" fill="white">
      <rect x="11" y="3" width="6" height="6" rx="0.5" />
    </mask>
    <rect
      x="11"
      y="3"
      width="6"
      height="6"
      rx="0.5"
      stroke="currentColor"
      stroke-width="2"
      mask="url(#path-4-inside-1_253_1697)"
    />
  </svg>
`;

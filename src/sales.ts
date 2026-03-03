import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const salesIcon = ({
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
    class=${`sales-icon ${className ?? ''}`}
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
      d="M3 14L7.5 9.5L10.5 12.5L17 6"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13 6H17V10"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
`;

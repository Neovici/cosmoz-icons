import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const rulesIcon = ({
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
    class=${`rules-icon ${className ?? ''}`}
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
      d="M4.5 4C4.5 3.72386 4.72386 3.5 5 3.5H16C16.2761 3.5 16.5 3.72386 16.5 4V16C16.5 16.2761 16.2761 16.5 16 16.5H5C4.72386 16.5 4.5 16.2761 4.5 16V4Z"
      stroke="currentColor"
    />
    <path d="M10.5 12L10.5 13" stroke="currentColor" />
    <path d="M10.5 6L10.5 11" stroke="currentColor" />
    <path d="M14 14.5L7 14.5" stroke="currentColor" />
  </svg>
`;

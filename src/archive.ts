import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const archiveIcon = ({
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
    class=${`archive-icon ${className ?? ''}`}
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
      d="M3.5 4C3.5 3.72386 3.72386 3.5 4 3.5H17C17.2761 3.5 17.5 3.72386 17.5 4V7.5H3.5V4Z"
      stroke="currentColor"
    />
    <path
      d="M4.5 8C4.5 7.72386 4.72386 7.5 5 7.5H16C16.2761 7.5 16.5 7.72386 16.5 8V16C16.5 16.2761 16.2761 16.5 16 16.5H5C4.72386 16.5 4.5 16.2761 4.5 16V8Z"
      stroke="currentColor"
    />
    <path d="M8 11.5H13" stroke="currentColor" />
  </svg>
`;

/* eslint-disable max-len */
import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const travelReportsIcon = ({
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
    class=${`travel-reports-icon ${className ?? ''}`}
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
      d="M17 5.5C17.2761 5.5 17.5 5.72386 17.5 6L17.5 15C17.5 15.2761 17.2761 15.5 17 15.5L4 15.5C3.72386 15.5 3.5 15.2761 3.5 15L3.5 6C3.5 5.72386 3.72386 5.5 4 5.5L17 5.5Z"
      stroke="currentColor"
    />
    <path
      d="M12 3.5C12.2761 3.5 12.5 3.72386 12.5 4L12.5 5C12.5 5.27614 12.2761 5.5 12 5.5L9 5.5C8.72386 5.5 8.5 5.27614 8.5 5L8.5 4C8.5 3.72386 8.72386 3.5 9 3.5L12 3.5Z"
      stroke="currentColor"
    />
    <path d="M14.5 6L14.5 16" stroke="currentColor" />
    <path d="M6.5 6L6.5 16" stroke="currentColor" />
  </svg>
`;

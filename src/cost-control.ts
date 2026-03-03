/* eslint-disable max-len */
import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const costControlIcon = ({
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
    class=${`cost-control-icon ${className ?? ''}`}
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
      d="M8 12.5C8.27614 12.5 8.5 12.7239 8.5 13L8.5 16C8.5 16.2761 8.27614 16.5 8 16.5L5 16.5C4.72386 16.5 4.5 16.2761 4.5 16L4.5 13C4.5 12.7239 4.72386 12.5 5 12.5L8 12.5Z"
      stroke="currentColor"
    />
    <path
      d="M12 7.5C12.2761 7.5 12.5 7.72386 12.5 8L12.5 16C12.5 16.2761 12.2761 16.5 12 16.5L9 16.5C8.72386 16.5 8.5 16.2761 8.5 16L8.5 8C8.5 7.72386 8.72386 7.5 9 7.5L12 7.5Z"
      stroke="currentColor"
    />
    <path
      d="M16 3.5C16.2761 3.5 16.5 3.72386 16.5 4L16.5 16C16.5 16.2761 16.2761 16.5 16 16.5L13 16.5C12.7239 16.5 12.5 16.2761 12.5 16L12.5 4C12.5 3.72386 12.7239 3.5 13 3.5L16 3.5Z"
      stroke="currentColor"
    />
  </svg>
`;
